---
title: "Lonsonho QS-Zigbee-D02-TRIAC-LN control via MQTT"
description: "Integrate your Lonsonho QS-Zigbee-D02-TRIAC-LN via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/QS-Zigbee-D02-TRIAC-LN.md)*

# Lonsonho QS-Zigbee-D02-TRIAC-LN

| Model | QS-Zigbee-D02-TRIAC-LN  |
| Vendor  | Lonsonho  |
| Description | 1 gang smart dimmer switch module with neutral |
| Supports | on/off, brightness |
| Picture | ![Lonsonho QS-Zigbee-D02-TRIAC-LN](../images/devices/QS-Zigbee-D02-TRIAC-LN.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


