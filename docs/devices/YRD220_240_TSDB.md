---
title: "Yale YRD220/240 TSDB control via MQTT"
description: "Integrate your Yale YRD220/240 TSDB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/YRD220_240_TSDB.md)*

# Yale YRD220/240 TSDB

| Model | YRD220/240 TSDB  |
| Vendor  | Yale  |
| Description | Lockwood keyless push button deadbolt lock |
| Supports | lock/unlock, battery |
| Picture | ![Yale YRD220/240 TSDB](../images/devices/YRD220-240-TSDB.jpg) |

## Notes

None

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
lock:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    value_template: "{{ value_json.state }}"
    state_locked: "LOCK"
    state_unlocked: "UNLOCK"

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


