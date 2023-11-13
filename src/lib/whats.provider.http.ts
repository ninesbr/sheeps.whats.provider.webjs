import axios, {AxiosInstance} from "axios";
import {Contact, Device, EventCallback} from "./whats.provider.data";
import {ProviderError} from "./whats.provider.error";
import {WhatsProvider} from "./whats.provider.interface";

export class WhatsProviderHttp implements WhatsProvider {
    private readonly host: string;
    private readonly instance: AxiosInstance;

    constructor(host: string) {
        this.host = host;
        this.instance = axios.create({
            baseURL: this.host
        });
        this.instance.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(new ProviderError(
                error?.response?.data?.code || error?.code,
                error?.response?.status,
                error?.response?.data?.message,
                error?.response?.data?.errors,
            ))
        );
    }

    async getDevices(): Promise<Device[]> {
        const resp = await this.instance.get('/api/v1/admin.service/list');
        return [...resp.data].map((item: any) => {
            return {
                ...item,
                createdAt: new Date(item?.createdAt),
                updatedAt: new Date(item?.updatedAt),
            } as Device;
        });
    }

    async getDevice(deviceId: string): Promise<Device> {
        const resp = await this.instance.get('/api/v1/admin.service/get', {
            params: {
                deviceId: deviceId,
            }
        });
        return {
            ...resp.data,
            createdAt: new Date(resp.data?.createdAt),
            updatedAt: new Date(resp.data?.updatedAt),
        } as Device;
    }

    async removeDevice(deviceId: string): Promise<void> {
        await this.instance.delete('/api/v1/admin.service/remove', {
            params: {
                deviceId: deviceId,
            }
        });
        return;
    }

    async createDevice(input: any): Promise<Device> {
        const resp = await this.instance.post('/api/v1/admin.service/create', input);
        return {
            ...resp.data,
            createdAt: new Date(resp.data?.createdAt),
            updatedAt: new Date(resp.data?.updatedAt),
        } as Device
    }

    async getContacts(deviceId: string): Promise<Contact[]> {
        const resp = await this.instance.get('/api/v1/admin.service/list.contact', {
            params: {
                deviceId: deviceId,
            }
        });
        return [...resp.data].map((item: any) => {
            return {
                ...item,
                createdAt: new Date(item?.createdAt),
                updatedAt: new Date(item?.updatedAt),
            } as Contact;
        });
    }

    async listenerEvents(input: {
        devices?: string[];
        events?: string[];
        autoReconnect?: boolean;
    }, callback: EventCallback): Promise<any> {
        const controller = new AbortController();
        try {
            const resp = await this.instance.get('/api/v1/admin.service/listener', {
                signal: controller.signal,
                headers: {
                    "Accept": "text/event-stream",
                },
                params: {
                    devices: input?.devices,
                },
                paramsSerializer: {
                    indexes: false, // brackets but no indexes
                },
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                responseType: 'stream'
            });
            return await new Promise((resolve, reject) => {
                const stream = resp?.data;
                if (!stream) {
                    const error = new Error('stream is null')
                    controller.abort();
                    callback(error, null);
                    reject(error);
                    return;
                }
                let myBuffer = '';
                stream.on('data', (chunk: any) => {
                    const content = chunk.toString()?.trim();
                    if (content === '') {
                        return;
                    }
                    const lines = content.split('\n');
                    for (const line of lines) {
                        if (line.startsWith('id:')) {
                            continue;
                        }
                        if (line.startsWith('data:')) {
                            myBuffer += line.slice(5);
                        } else {
                            myBuffer += line;
                        }
                        if (myBuffer.endsWith('}')) {
                            try {
                                const data = JSON.parse(myBuffer);
                                callback(null, {
                                    deviceId: data?.response?.deviceId,
                                    name: data?.name,
                                    body: data?.body,
                                    time: new Date(data?.time),
                                })
                            } catch (e: any) {
                                console.error(e);
                                callback(e, null);
                                reject(e);
                            } finally {
                                myBuffer = '';
                            }
                        }
                    }
                });
                stream.on('end', () => {
                    controller.abort();
                    resolve({});
                });
                stream.on('error', (err: any) => {
                    controller.abort();
                    callback(err, null);
                    reject(err);
                });
            });
        } catch (e: any) {
            if (input.autoReconnect) {
                // delay 3s
                controller.abort();
                await new Promise(resolve => setTimeout(resolve, 3000));
                return this.listenerEvents(input, callback);
            }
        }
    }
}