---
title: "Gledopto GL-D-005ZS control via MQTT"
description: "Integrate your Gledopto GL-D-005ZS via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GL-D-005ZS.md)*

# Gledopto GL-D-005ZS

| Model | GL-D-005ZS  |
| Vendor  | Gledopto  |
| Description | LED RGB + CCT downlight |
| Supports | on/off, brightness, color temperature, color xy |
| Picture | ![Gledopto GL-D-005ZS](../images/devices/GL-D-005ZS.jpg) |

## Notes


### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


* `hue_correction`: (optional) Corrects hue values based on a correction map for matching color
rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:
    * choose one of your other lights to be the color reference
    * send a sample color to both lights (reference and non-reference)
    * modify hue value for non-reference light until it color matches the reference light
    * take note of the in and out values, where
        * `in` is the hue value you sent to your reference light
        * `out` is the hue value you had to dial your non-reference light to
    * repeat with a few other sample colors (4-5 should suffice)

    **Example correction map:**
    ```yaml
    hue_correction:
        - in: 28
            out: 45
        - in: 89
            out: 109
        - in: 184
            out: 203
        - in: 334
            out: 318
    ```


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
    color_temp: true
    xy: true
    hs: false
    schema: "json"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/set"
    brightness_scale: 254
    effect: true
    effect_list: 
      - "blink"
      - "breathe"
      - "okay"
      - "channel_change"
      - "finish_effect"
      - "stop_effect"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "lqi"
    value_template: "{{ value_json.linkquality }}"
    icon: "mdi:signal"
```
{% endraw %}


