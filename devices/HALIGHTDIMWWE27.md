---
title: "Hive HALIGHTDIMWWE27 control via MQTT"
description: "Integrate your Hive HALIGHTDIMWWE27 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docgen/device_page_notes.js)*

# Hive HALIGHTDIMWWE27

| Model | HALIGHTDIMWWE27  |
| Vendor  | Hive  |
| Description | Active smart bulb white LED (E27) |
| Supports | on/off, brightness |
| Picture | ![../images/devices/HALIGHTDIMWWE27.jpg](../images/devices/HALIGHTDIMWWE27.jpg) |

## Notes


### Pairing
Follow instructions from
[How do I reset my Hive Active Light?](https://www.hivehome.com/ca/support/Help_installing_Hive/HIH_Hive_Active_Light/How-do-I-reset-my-Hive-Active-Light). After resetting the bulb will automatically connect.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possbile with the following configuration:


### HALIGHTDIMWWE27
{% raw %}
```yaml
light:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    brightness: true
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "-"
    value_template: "{{ value_json.linkquality }}"
```
{% endraw %}


