import {Contact, Device, DeviceCreateInput, EventCallback} from "./whats.provider.data";
import {ProviderError} from "./whats.provider.error";
import {WhatsProvider} from "./whats.provider.interface";

export class WhatsProviderHttp implements WhatsProvider {
    private readonly host: string;

    constructor(host: string) {
        if (!host || host.trim() === '') {
            throw ProviderError.of({message: 'host is required.'});
        }

        if (host.endsWith('/')) {
            host = host = host.slice(0, -1);
        }

        this.host = host;
    }

    private resolveURL(path: string) {
        return this.host + path;
    }

    private async errorHandler(err: any, resp?: Response): Promise<ProviderError> {
        if (err) {
            return ProviderError.of({
                message: err?.cause || err?.message,
                code: err?.code,
            });
        }
        if (resp && resp.ok) {
            return null
        }
        switch (resp?.status) {
            case 422:
            case 400: {
                const body = await resp.json();
                return ProviderError.of({
                    code: body?.code,
                    statusCode: body?.statusCode,
                    message: body?.message,
                    errors: body?.errors,
                });

            }
            default: {
                return ProviderError.of({
                    message: `response status '${resp.status}:${resp.statusText}' `
                })
            }
        }
    }

    private async exec(path: string, config: any): Promise<{ res?: any, err?: Error }> {
        try {
            const res: Response = await fetch(new Request(this.resolveURL(path), config));
            return {
                res: res,
                err: await this.errorHandler(null, res),
            }
        } catch (e) {
            return {
                res: null,
                err: await this.errorHandler(e, null),
            }
        }
    }

    async getDevices(): Promise<Device[]> {
        const {res, err} = await this.exec('/api/v1/admin.service/list', {method: 'GET'});
        if (err) {
            throw err;
        }
        const body = await res.json();
        return [...body].map((item: any) => {
            return {
                ...item,
                createdAt: new Date(item?.createdAt),
                updatedAt: new Date(item?.updatedAt),
            } as Device;
        });
    }

    async getDevice(deviceId: string): Promise<Device> {
        const queryParams = new URLSearchParams();
        queryParams.set('deviceId', deviceId);
        const {res, err} = await this.exec('/api/v1/admin.service/get?' + queryParams.toString(), {
            method: 'GET',
        });
        if (err) {
            throw err;
        }
        const body = await res.json();
        return {
            ...body,
            createdAt: new Date(body?.createdAt),
            updatedAt: new Date(body?.updatedAt),
        } as Device;
    }

    async removeDevice(deviceId: string): Promise<void> {
        const queryParams = new URLSearchParams();
        queryParams.set('deviceId', deviceId);
        const {err} = await this.exec('/api/v1/admin.service/remove?' + queryParams.toString(), {
            method: 'DELETE',
        });
        if (err) {
            throw err;
        }
        return;
    }

    async createDevice(input: DeviceCreateInput): Promise<Device> {
        const {res, err} = await this.exec('/api/v1/admin.service/create', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        });
        if (err) {
            throw err;
        }
        const body = await res.json();
        return {
            ...body,
            createdAt: new Date(body?.createdAt),
            updatedAt: new Date(body?.updatedAt),
        } as Device
    }

    async getContacts(deviceId: string): Promise<Contact[]> {
        const queryParams = new URLSearchParams();
        queryParams.set('deviceId', deviceId);
        const {res, err} = await this.exec('/api/v1/admin.service/list.contact?' + queryParams.toString(), {
            method: 'GET',
        });
        if (err) {
            throw err;
        }
        const body = await res.json();
        return [...body].map((item: any) => {
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
        const {res, err} = await this.exec('/api/v1/admin.service/listener', {
            signal: controller.signal,
            method: 'GET',
            headers: new Headers({
                'Accept': 'text/event-stream',
            })
        });
        if (err) {
            controller.abort();
            throw err;
        }
        const reader = res.body.getReader();
        let myBuffer = '';
        while (true) {
            const {value, done} = await reader.read();
            if (done) {
                controller.abort();
                break;
            }
            const content = new TextDecoder().decode(value);
            if (content === '') {
                continue;
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
                    } finally {
                        myBuffer = '';
                    }
                }
            }
        }
    }
}