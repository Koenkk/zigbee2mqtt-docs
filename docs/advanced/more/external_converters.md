---
sidebar: auto
---

# External converters

:::tip WARNING V1.x > V2.x
Breaking change:
External converters and extensions
    The external_converters setting is no longer used. Instead all external converters inside /external_converters directory are now automatically loaded. Make sure to move all your external converters to this directory. And remove the external_converters in your configuration file.
:::

Zigbee2MQTT uses [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) to parse messages to and from devices.

External converters provide a way to test support for new devices, they work identically to internal converters.

External converters are stored in `(zigbee2mqtt)/external_converters/<your-converter-name>.js` folder and have to export a JavaScript Object or Array of Object matching the type [`DefinitionWithExtend`](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/types.ts). Refer to [existing converters](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices) to get familiar with the framework.

:::tip TIP
Once your converter is ready, open a [pull request](https://github.com/Koenkk/zigbee-herdsman-converters/pulls) so it can be integrated into Zigbee2MQTT for all to use. Once the new Zigbee2MQTT version is released, you can just delete the external converter.
:::

Example:

File: `(zigbee2mqtt)/external_converters/my-first-converter.js`

```js
const {temperature, humidity, battery} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor',
    extend: [temperature(), humidity(), battery()],
};

module.exports = definition;
```

### More examples

- [Sensor using modern extends](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor_me.js) (same as above)
- [Sensor using non modern extends](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/sensor.js)
- [Bulb (light)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.js)
- [Plug (switch)](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.js)
- [Advanced example](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js)
- Definitions of already supported devices can be found [here](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices). It may help to look at devices from the same vendor or type.

### Using modern extends

The entire API can be found [here](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/lib/modernExtend.ts).

### Using non modern extends

The most common API endpoints are accessible from the following imports:

```js
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const ota = require('zigbee-herdsman-converters/lib/ota');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;
```

## Converters list

When Zigbee2MQTT starts it publishes `zigbee2mqtt/bridge/converters` with payload `[{"name": "my-first-converter.js": "code": <HERE COMES YOUR CONVERTER CODE>}]` containing all the converters loaded from the file system. The same message is also published when a converter changes at runtime (from one of the below actions), with the appropriately updated payload.

## Save converter

To save a converter at runtime, send a message to `zigbee2mqtt/bridge/request/converter/save` with payload `{"name": "my-first-converter.js", "code": <HERE COMES YOUR CONVERTER CODE>}`. The code will be saved in `data/external_converters/` in the file with the given name.

## Remove converter

To remove a converter at runtime, send a message to `zigbee2mqtt/bridge/request/converter/remove` with payload `{"name": "my-first-converter.js"}`. The file will be deleted from `data/external_converters/`.

:::tip Wan't to check if your freshly made converter loaded correctly? 
After restart your device should change from unsupported to supported. 
If you want to have a closer look if the converter is recognized and loaded. 
Press "Restart" on the addon and look into the logs. 
Here you should find: `[DATE TIME] info: 	z2m: Loaded external converter 'your-converter-name.js'`.
:::
