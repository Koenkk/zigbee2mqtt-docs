---
title: "Lonsonho ZB-RGBCW control via MQTT"
description: "Integrate your Lonsonho ZB-RGBCW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-12-30T11:31:00Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Lonsonho ZB-RGBCW

|     |     |
|-----|-----|
| Model | ZB-RGBCW  |
| Vendor  | [Lonsonho](/supported-devices/#v=Lonsonho)  |
| Description | Zigbee 3.0 LED-bulb, RGBW LED |
| Exposes | light (state, brightness, color_temp, color_xy), linkquality |
| Picture | ![Lonsonho ZB-RGBCW](https://www.zigbee2mqtt.io/images/devices/ZB-RGBCW.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
1. Switch on your device.
2. Now switch off and back on within 2 seconds.
3. Repeat off/on four more times.
4. Reset is done when the device is switched on the fifth time and the light starts pulsing.
<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `transition`: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition). The value must be a number with a minimum value of `0`

* `color_sync`: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be `true` or `false`

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Light 
This light supports the following features: `state`, `brightness`, `color_temp`, `color_xy`.
- `state`: To control the state publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`. To read the state send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
- `brightness`: To control the brightness publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"brightness": VALUE}` where `VALUE` is a number between `0` and `254`. To read the brightness send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"brightness": ""}`.
- `color_temp`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color_temp": VALUE}` where `VALUE` is a number between `153` and `500`, the higher the warmer the color. To read the color temperature send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color_temp": ""}`. Besides the numeric values the following values are accepted: `coolest`, `cool`, `neutral`, `warm`, `warmest`.
- `color_xy`: To control the XY color (CIE 1931 color space) publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"color": {"x": X_VALUE, "y": Y_VALUE}}` (e.g. `{"color":{"x":0.123,"y":0.123}}`). To read the XY color send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"color":{"x":"","y":""}}`. Alternatively it is possible to set the XY color via RGB:
  - `{"color": {"r": R, "g": G, "b": B}}` e.g. `{"color":{"r":46,"g":102,"b":150}}`
  - `{"color": {"rgb": "R,G,B"}}` e.g. `{"color":{"rgb":"46,102,150"}}`
  - `{"color": {"hex": HEX}}` e.g. `{"color":{"hex":"#547CFF"}}`

**Note:** The returnd values are always in XY color, a conversion function (in perl) is available to change those back into RGB space for personal verification if desired.

#### On with timed off
When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property `on_time` to the payload which is the time in seconds the state should remain on.
Additionally an `off_wait_time` property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands.
Support depends on the light firmware. Some devices might require both `on_time` and `off_wait_time` to work
Examples : `{"state" : "ON", "on_time": 300}`, `{"state" : "ON", "on_time": 300, "off_wait_time": 120}`.

#### Transition
For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property `transition` to the payload which is the transition time in seconds.
Examples: `{"brightness":156,"transition":3}`, `{"color_temp":241,"transition":1}`.

#### Moving/stepping
Instead of setting a value (e.g. brightness) directly it is also possible to:
- move: this will automatically move the value over time, to stop send value `stop` or `0`.
- step: this will increment/decrement the current value by the given one.

The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.
To do this send a payload like below to `zigbee2mqtt/FRIENDLY_NAME/set`

**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use `brightness_move_onoff`/`brightness_step_onoff`
````js
{
  "brightness_move": -40, // Starts moving brightness down at 40 units per second
  "brightness_move": 0, // Stop moving brightness
  "brightness_step": 40 // Increases brightness by 40
  "color_temp_move": 60, // Starts moving color temperature up at 60 units per second
  "color_temp_move": "stop", // Stop moving color temperature
  "color_temp_step": 99, // Increase color temperature by 99
}
````

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

### Conversion from returned XY to RGB
To get proper color coversion back to RGB to verify the setting applied to be bulb the following function can be used:
````perl
sub
xy2RGB($;$)
{
  my ($x,$y) = @_;
  # Alternately, brightness may be used here. assuming 100% brightness.
  my $br=1.0;
  my $z=1.0-$x-$y;
  # Convert X/Y into x/y/z
  $z = ($br / $y)*$z;
  $x= ($br / $y)*$x;
  $y = $br;
  # reverse matrix for sRGB space
  my $r =  (($x * 1.656492) - ($y * 0.354851) - ($z * 0.255038));
  my $g =  (($x * -0.707196) + ($y * 1.655397) + ($z * 0.036152));
  my $b = (($x * 0.051713) - ($y * 0.121364) + ($z * 1.011530));
  # balance as needed
  if ($r>$b and $r>$g and $r >1.0) {
    $g=$g/$r; $b=$b/$r; $r=1.0;
  }elsif ($g>$b and $g >$r and $g >1.0) {
    $r=$r/$g; $b=$b/$g; $g=1.0;
  }elsif ($b>$r and $b >$g and $b >1.0) {
    $r=$r/$b; $g=$g/$b; $b=1.0;
  }
  # Convert, rounding up.
  $r =  int(255.5 * (($r <= 0.0031308) ? (12.92 * $r) : (1.055 * pow($r, (1.0/ 2.4)) - 0.055)));
  $g =  int(255.5 * (($g <= 0.0031308) ? (12.92 * $g) : (1.055 * pow($g, (1.0/ 2.4)) - 0.055)));
  $b =  int(255.5 * (($b <= 0.0031308) ? (12.92 * $b) : (1.055 * pow($b, (1.0/ 2.4)) - 0.055)));
  return uc(sprintf("%02x%02x%02x",$r,$g,$b));
}
````
