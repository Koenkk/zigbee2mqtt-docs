---
title: " Somgoms ZSTY-SM-11ZG-US-W control via MQTT"
description: "Integrate your  Somgoms ZSTY-SM-11ZG-US-W via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZSTY-SM-11ZG-US-W.md)*

#  Somgoms ZSTY-SM-11ZG-US-W

| Model | ZSTY-SM-11ZG-US-W  |
| Vendor  |  Somgoms  |
| Description | 1 gang switch |
| Supports | on/off |
| Picture | ![ Somgoms ZSTY-SM-11ZG-US-W](../images/devices/ZSTY-SM-11ZG-US-W.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


