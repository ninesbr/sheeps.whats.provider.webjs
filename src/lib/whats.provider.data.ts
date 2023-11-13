export interface Device {
    id:           string;
    name:         string;
    title:        string;
    avatar:       string;
    accessKey:    string;
    tags:         string[];
    webhooks:     any[];
    createdAt:    Date;
    updatedAt:    Date;
    enabled:      boolean;
    keepMessages: boolean;
    status?:       boolean;
    statusString?: string;
    qrcode?:       string;
    waId?:         string;
    waName?:       string;
}
export interface Contact {
    id: string;
    name: string;
    deviceId: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface EventMessage {
    deviceId: string;
    name: string;
    body: any;
    time: Date;
}

export interface DeviceCreateInput {
    name: string;
    title: string;
    avatar: string;
    tags: string[];
    webhooks: any[];
    keepMessages: boolean;

}

export declare type EventCallback = (error: Error, msg: EventMessage | null) => Promise<void>;