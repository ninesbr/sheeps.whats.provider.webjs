import * as jspb from 'google-protobuf'



export class Error extends jspb.Message {
  getCode(): number;
  setCode(value: number): Error;

  getReasonList(): Array<string>;
  setReasonList(value: Array<string>): Error;
  clearReasonList(): Error;
  addReason(value: string, index?: number): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: number,
    reasonList: Array<string>,
  }
}

export class Request extends jspb.Message {
  getId(): string;
  setId(value: string): Request;

  getDeviceid(): string;
  setDeviceid(value: string): Request;

  getOwner(): string;
  setOwner(value: string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    id: string,
    deviceid: string,
    owner: string,
  }
}

export class Response extends jspb.Message {
  getId(): string;
  setId(value: string): Response;

  getDeviceid(): string;
  setDeviceid(value: string): Response;

  getError(): Error | undefined;
  setError(value?: Error): Response;
  hasError(): boolean;
  clearError(): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    id: string,
    deviceid: string,
    error?: Error.AsObject,
  }
}

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): Device;

  getName(): string;
  setName(value: string): Device;

  getTitle(): string;
  setTitle(value: string): Device;

  getAvatar(): string;
  setAvatar(value: string): Device;

  getOwner(): string;
  setOwner(value: string): Device;

  getAccesskey(): string;
  setAccesskey(value: string): Device;

  getKeepmessages(): boolean;
  setKeepmessages(value: boolean): Device;

  getWebhooksList(): Array<string>;
  setWebhooksList(value: Array<string>): Device;
  clearWebhooksList(): Device;
  addWebhooks(value: string, index?: number): Device;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Device;
  clearTagsList(): Device;
  addTags(value: string, index?: number): Device;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    name: string,
    title: string,
    avatar: string,
    owner: string,
    accesskey: string,
    keepmessages: boolean,
    webhooksList: Array<string>,
    tagsList: Array<string>,
    propertiesMap: Array<[string, string]>,
  }
}

export class Contact extends jspb.Message {
  getId(): string;
  setId(value: string): Contact;

  getName(): string;
  setName(value: string): Contact;

  getDeviceid(): string;
  setDeviceid(value: string): Contact;

  getCreatedat(): string;
  setCreatedat(value: string): Contact;

  getUpdatedat(): string;
  setUpdatedat(value: string): Contact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    id: string,
    name: string,
    deviceid: string,
    createdat: string,
    updatedat: string,
  }
}

export class CreateRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): CreateRequest;
  hasRequest(): boolean;
  clearRequest(): CreateRequest;

  getDevice(): Device | undefined;
  setDevice(value?: Device): CreateRequest;
  hasDevice(): boolean;
  clearDevice(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    request?: Request.AsObject,
    device?: Device.AsObject,
  }
}

export class RemoveRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): RemoveRequest;
  hasRequest(): boolean;
  clearRequest(): RemoveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    request?: Request.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): GetRequest;
  hasRequest(): boolean;
  clearRequest(): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    request?: Request.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): ListRequest;
  hasRequest(): boolean;
  clearRequest(): ListRequest;

  getFilterMap(): jspb.Map<string, string>;
  clearFilterMap(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    request?: Request.AsObject,
    filterMap: Array<[string, string]>,
  }
}

export class ListContactRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): ListContactRequest;
  hasRequest(): boolean;
  clearRequest(): ListContactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactRequest): ListContactRequest.AsObject;
  static serializeBinaryToWriter(message: ListContactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactRequest;
  static deserializeBinaryFromReader(message: ListContactRequest, reader: jspb.BinaryReader): ListContactRequest;
}

export namespace ListContactRequest {
  export type AsObject = {
    request?: Request.AsObject,
  }
}

export class ListenerRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): ListenerRequest;
  hasRequest(): boolean;
  clearRequest(): ListenerRequest;

  getFilterdevicesList(): Array<string>;
  setFilterdevicesList(value: Array<string>): ListenerRequest;
  clearFilterdevicesList(): ListenerRequest;
  addFilterdevices(value: string, index?: number): ListenerRequest;

  getFiltereventsList(): Array<string>;
  setFiltereventsList(value: Array<string>): ListenerRequest;
  clearFiltereventsList(): ListenerRequest;
  addFilterevents(value: string, index?: number): ListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenerRequest): ListenerRequest.AsObject;
  static serializeBinaryToWriter(message: ListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenerRequest;
  static deserializeBinaryFromReader(message: ListenerRequest, reader: jspb.BinaryReader): ListenerRequest;
}

export namespace ListenerRequest {
  export type AsObject = {
    request?: Request.AsObject,
    filterdevicesList: Array<string>,
    filtereventsList: Array<string>,
  }
}

export class StreamMessageRequest extends jspb.Message {
  getRequest(): Request | undefined;
  setRequest(value?: Request): StreamMessageRequest;
  hasRequest(): boolean;
  clearRequest(): StreamMessageRequest;

  getLimit(): number;
  setLimit(value: number): StreamMessageRequest;

  getOffset(): number;
  setOffset(value: number): StreamMessageRequest;

  getFilterMap(): jspb.Map<string, string>;
  clearFilterMap(): StreamMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessageRequest): StreamMessageRequest.AsObject;
  static serializeBinaryToWriter(message: StreamMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessageRequest;
  static deserializeBinaryFromReader(message: StreamMessageRequest, reader: jspb.BinaryReader): StreamMessageRequest;
}

export namespace StreamMessageRequest {
  export type AsObject = {
    request?: Request.AsObject,
    limit: number,
    offset: number,
    filterMap: Array<[string, string]>,
  }
}

export class CreateResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): CreateResponse;
  hasResponse(): boolean;
  clearResponse(): CreateResponse;

  getDevice(): Device | undefined;
  setDevice(value?: Device): CreateResponse;
  hasDevice(): boolean;
  clearDevice(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    response?: Response.AsObject,
    device?: Device.AsObject,
  }
}

export class RemoveResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): RemoveResponse;
  hasResponse(): boolean;
  clearResponse(): RemoveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
    response?: Response.AsObject,
  }
}

export class GetResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): GetResponse;
  hasResponse(): boolean;
  clearResponse(): GetResponse;

  getDevice(): Device | undefined;
  setDevice(value?: Device): GetResponse;
  hasDevice(): boolean;
  clearDevice(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    response?: Response.AsObject,
    device?: Device.AsObject,
  }
}

export class ListResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): ListResponse;
  hasResponse(): boolean;
  clearResponse(): ListResponse;

  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): ListResponse;
  clearDevicesList(): ListResponse;
  addDevices(value?: Device, index?: number): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    response?: Response.AsObject,
    devicesList: Array<Device.AsObject>,
  }
}

export class ListContactResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): ListContactResponse;
  hasResponse(): boolean;
  clearResponse(): ListContactResponse;

  getContactsList(): Array<Contact>;
  setContactsList(value: Array<Contact>): ListContactResponse;
  clearContactsList(): ListContactResponse;
  addContacts(value?: Contact, index?: number): Contact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListContactResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListContactResponse): ListContactResponse.AsObject;
  static serializeBinaryToWriter(message: ListContactResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListContactResponse;
  static deserializeBinaryFromReader(message: ListContactResponse, reader: jspb.BinaryReader): ListContactResponse;
}

export namespace ListContactResponse {
  export type AsObject = {
    response?: Response.AsObject,
    contactsList: Array<Contact.AsObject>,
  }
}

export class ListenerResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): ListenerResponse;
  hasResponse(): boolean;
  clearResponse(): ListenerResponse;

  getName(): string;
  setName(value: string): ListenerResponse;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): ListenerResponse;

  getError(): Error | undefined;
  setError(value?: Error): ListenerResponse;
  hasError(): boolean;
  clearError(): ListenerResponse;

  getTime(): string;
  setTime(value: string): ListenerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenerResponse): ListenerResponse.AsObject;
  static serializeBinaryToWriter(message: ListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenerResponse;
  static deserializeBinaryFromReader(message: ListenerResponse, reader: jspb.BinaryReader): ListenerResponse;
}

export namespace ListenerResponse {
  export type AsObject = {
    response?: Response.AsObject,
    name: string,
    body: Uint8Array | string,
    error?: Error.AsObject,
    time: string,
  }
}

export class StreamMessageResponse extends jspb.Message {
  getResponse(): Response | undefined;
  setResponse(value?: Response): StreamMessageResponse;
  hasResponse(): boolean;
  clearResponse(): StreamMessageResponse;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): StreamMessageResponse;

  getLimit(): number;
  setLimit(value: number): StreamMessageResponse;

  getOffset(): number;
  setOffset(value: number): StreamMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessageResponse): StreamMessageResponse.AsObject;
  static serializeBinaryToWriter(message: StreamMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessageResponse;
  static deserializeBinaryFromReader(message: StreamMessageResponse, reader: jspb.BinaryReader): StreamMessageResponse;
}

export namespace StreamMessageResponse {
  export type AsObject = {
    response?: Response.AsObject,
    message: Uint8Array | string,
    limit: number,
    offset: number,
  }
}

