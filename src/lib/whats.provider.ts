import {WhatsProvider} from "./whats.provider.interface";
import {WhatsProviderHttp} from "./whats.provider.http";

export const NewProvider = (config: { host: string }): WhatsProvider => {
    return new WhatsProviderHttp(config.host);
};

