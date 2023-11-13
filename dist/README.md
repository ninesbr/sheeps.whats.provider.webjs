#  Whatsapp Provider web js
## interface to integration with whatsapp api grpc.
```shell
npm install --save @sheepsbr/whats.provider.webjs
```

## Usage

```javascript
const { NewProvider } from '@sheepsbr/whats.provider.webjs';

const CONFIG = {
    host: string,
};

const provider = NewProvider(CONFIG);

// create a new device
const device = await provider.createDevice({
    title: "sheeps dev wa business",
    name: "sheeps dev wa business",
    avatar: "https://robohash.org/a.png",
    webhooks: [],
    keepMessages: true,
    tags: ["dev"]
});

// listener events and scan qr code sample
(async () => {
    await provider.listenerEvents({ autoReconnect: true }, ( err, event ) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(event); 
    });
})();

// get device by id
const device = await provider.getDevice("xxxxx");
console.log(device); // contains qrcode, status, etc

// get all devices
const devices = await provider.getDevices();
console.log(devices);

// remove device by id
await provider.removeDevice("xxxxx");

// get contacts by device id
const contacts = await provider.getContacts("xxxxx");
console.log(contacts);