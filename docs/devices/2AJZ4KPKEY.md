---
title: "Konke 2AJZ4KPKEY control via MQTT"
description: "Integrate your Konke 2AJZ4KPKEY via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/2AJZ4KPKEY.md)*

# Konke 2AJZ4KPKEY

| Model | 2AJZ4KPKEY  |
| Vendor  | Konke  |
| Description | Multi-function button |
| Supports | single, double and long click |
| Picture | ![Konke 2AJZ4KPKEY](../images/devices/2AJZ4KPKEY.jpg) |

## Notes


### Pairing
Press and hold the reset button in the side of the device for +- 5 seconds (until the blue light starts blinking).
You will need a needle or a pin to do it. After this the device will automatically join.


### Important
Konke devices only work on Zigbee channel 15, 20 and 25.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:toggle-switch"
    value_template: "{{ value_json.click }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "%"
    device_class: "battery"
    value_template: "{{ value_json.battery }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:signal"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


