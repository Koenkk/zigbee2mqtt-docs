---
title: "Tuya TS0207_repeater control via MQTT"
description: "Integrate your Tuya TS0207_repeater via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0207_repeater.md)*

# Tuya TS0207_repeater

| Model | TS0207_repeater  |
| Vendor  | Tuya  |
| Description | Repeater |
| Supports | linkquality |
| Picture | ![Tuya TS0207_repeater](../images/devices/TS0207_repeater.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


