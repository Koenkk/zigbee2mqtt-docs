---
title: "SONOFF TRVZB control via MQTT"
description: "Integrate your SONOFF TRVZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-09-28T10:54:36
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF TRVZB

|     |     |
|-----|-----|
| Model | TRVZB  |
| Vendor  | [SONOFF](/supported-devices/#v=SONOFF)  |
| Description | Zigbee thermostatic radiator valve |
| Exposes | climate (occupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), battery, child_lock, open_window, frost_protection_temperature, idle_steps, closing_steps, valve_opening_limit_voltage, valve_closing_limit_voltage, valve_motor_running_voltage, valve_opening_degree, valve_closing_degree, schedule, linkquality |
| Picture | ![SONOFF TRVZB](https://www.zigbee2mqtt.io/images/devices/TRVZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Pairing
To pair the device you first need to have it powered, attached to the valve and displaying the temperature.

If the device is showing `FS` or `RD` press the button on the top of the unit and it should now show `,,7`

Once this stops flashing hold the top button for about 5 seconds at which point the unit should now show the temperature. (If the temperature does not show, the valve calibration might have failed. this can happen if you did not mount it properly. Then you need to remount the thermostat and start with the previous step.)

Keep turning the dial counter-clockwise unil the display shows `OF` and finally hold down the top button for 3 seconds.

You should now see a flashing signal icon and it will try and pair.
<!-- Notes END: Do not edit below this line -->


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../guide/usage/ota_updates.md).


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `thermostat_unit`: Controls the temperature unit of the thermostat (default celsius). The value must be one of `celsius`, `fahrenheit`


## Exposes

### Climate 
This climate device supports the following features: `occupied_heating_setpoint`, `local_temperature`, `local_temperature_calibration`, `system_mode`, `running_state`.
- `occupied_heating_setpoint`: Temperature setpoint. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupied_heating_setpoint": VALUE}` where `VALUE` is the °C between `4` and `35`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupied_heating_setpoint": ""}`.
- `local_temperature`: Current temperature measured on the device (in °C). To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.
- `system_mode`: Mode of the thermostat. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"system_mode": VALUE}` where `VALUE` is one of: `off`, `auto`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"system_mode": ""}`.
- `running_state`: The current running state. Possible values are: `idle`, `heat`. To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"running_state": ""}`.
- `local_temperature_calibration`: Offset to add/subtract to the local temperature. To control publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"local_temperature_calibration": VALUE}.`To read send a message to `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"local_temperature": ""}`.The minimal value is `-12.8` and the maximum value is `12.7` with a step size of `0.2`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Child lock (binary)
Enables/disables physical input on the device.
Value can be found in the published state on the `child_lock` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"child_lock": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"child_lock": NEW_VALUE}`.
If value equals `LOCK` child lock is ON, if `UNLOCK` OFF.

### Open window (binary)
Automatically turns off the radiator when local temperature drops by more than 1.5°C in 4.5 minutes..
Value can be found in the published state on the `open_window` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"open_window": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"open_window": NEW_VALUE}`.
If value equals `ON` open window is ON, if `OFF` OFF.

### Frost protection temperature (numeric)
Minimum temperature at which to automatically turn on the radiator, if system mode is off, to prevent pipes freezing..
Value can be found in the published state on the `frost_protection_temperature` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"frost_protection_temperature": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"frost_protection_temperature": NEW_VALUE}`.
The minimal value is `4` and the maximum value is `35`.
The unit of this value is `°C`.

### Idle steps (numeric)
Number of steps used for calibration (no-load steps).
Value can be found in the published state on the `idle_steps` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"idle_steps": ""}`.
It's not possible to write (`/set`) this value.

### Closing steps (numeric)
Number of steps it takes to close the valve.
Value can be found in the published state on the `closing_steps` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"closing_steps": ""}`.
It's not possible to write (`/set`) this value.

### Valve opening limit voltage (numeric)
Valve opening limit voltage.
Value can be found in the published state on the `valve_opening_limit_voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_opening_limit_voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Valve closing limit voltage (numeric)
Valve closing limit voltage.
Value can be found in the published state on the `valve_closing_limit_voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_closing_limit_voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Valve motor running voltage (numeric)
Valve motor running voltage.
Value can be found in the published state on the `valve_motor_running_voltage` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_motor_running_voltage": ""}`.
It's not possible to write (`/set`) this value.
The unit of this value is `mV`.

### Valve opening degree (numeric)
Valve open position (percentage) control. If the opening degree is set to 100%, the valve is fully open when it is opened. If the opening degree is set to 0%, the valve is fully closed when it is opened, and the default value is 100%. Note: only version v1.1.4 or higher is supported..
Value can be found in the published state on the `valve_opening_degree` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_opening_degree": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_opening_degree": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Valve closing degree (numeric)
Valve closed position (percentage) control. If the closing degree is set to 100%, the valve is fully closed when it is closed. If the closing degree is set to 0%, the valve is fully opened when it is closed, and the default value is 100%. Note: Only version v1.1.4 or higher is supported..
Value can be found in the published state on the `valve_closing_degree` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"valve_closing_degree": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"valve_closing_degree": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Schedule (composite)
The preset heating schedule to use when the system mode is set to "auto" (indicated with ⏲ on the TRV). Up to 6 transitions can be defined per day, where a transition is expressed in the format 'HH:mm/temperature', each separated by a space. The first transition for each day must start at 00:00 and the valid temperature range is 4-35°C (in 0.5°C steps). The temperature will be set at the time of the first transition until the time of the next transition, e.g. '04:00/20 10:00/25' will result in the temperature being set to 20°C at 04:00 until 10:00, when it will change to 25°C..
Can be set by publishing to `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"weekly_schedule": {"sunday": VALUE, "monday": VALUE, "tuesday": VALUE, "wednesday": VALUE, "thursday": VALUE, "friday": VALUE, "saturday": VALUE}}`
- `sunday` (text) 
- `monday` (text) 
- `tuesday` (text) 
- `wednesday` (text) 
- `thursday` (text) 
- `friday` (text) 
- `saturday` (text) 

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

