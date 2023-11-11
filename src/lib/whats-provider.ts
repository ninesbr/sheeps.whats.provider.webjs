import {AdminServiceClient} from './MessageServiceClientPb';
import {Request, ListRequest, Device} from './message_pb';
export class WhatsProvider {
    client: AdminServiceClient;

    constructor(hostname: string) {
        this.client = new AdminServiceClient(hostname, null, null);
    }

    getDevices(): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = new Request();
            const listRequest = new ListRequest();
            request.setId(this.uid());
            listRequest.setRequest(request);
            this.client?.list(listRequest, {}, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        response: {
                            id: res.getResponse()?.getId(),
                        },
                        devices: res.getDevicesList()?.map((item: Device) => {
                            return {
                                ...item.toObject(),
                            }
                        }),
                    });
                }
            });
        });
    }

    private uid (): string{
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }
}