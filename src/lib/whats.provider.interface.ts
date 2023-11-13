import {Contact, Device, EventCallback} from "./whats.provider.data";

export interface WhatsProvider {

    getDevices(): Promise<Device[]>;

    getDevice(deviceId: string): Promise<Device>;

    removeDevice(deviceId: string): Promise<void>;

    createDevice(input: any): Promise<Device>;

    getContacts(deviceId: string): Promise<Contact[]>;

    listenerEvents(input: {
        devices?: string[];
        events?: string[];
        autoReconnect?: boolean;
    }, callback: EventCallback): Promise<any>;
}