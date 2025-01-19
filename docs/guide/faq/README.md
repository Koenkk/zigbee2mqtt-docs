---
sidebarDepth: 0
---

# FAQ

[[toc]]

## General limitations that apply to all Zigbee implementations

Note that each Zigbee2MQTT installation instance only supports connecting a single dedicated Zigbee Coordinator radio adapter or module with a single Zigbee network and that the Zigbee Coordinator cannot already be connected or used by any other application. Any devices that are or have previously been connected to another Zigbee implementation will also need to first be reset to their factory default settings before they can be paired/joined to Zigbee2MQTT, please see each device manufacturer's documentation.

Any Zigbee device is limited to only be paired/joined to one Zigbee Coordinator and only be part of one Zigbee network, meaning that Zigbee devices can only be connected to a single Zigbee gateway. If you want to move a Zigbee device to a different Zigbee network then you need to factory reset that Zigbee device and re-pair/re-join it to the other Zigbee Gateway. This is a limitation in the current (as well as previous) Zigbee protocol specifications, governed by the [CSA (Connectivity Standards Alliance)](https://csa-iot.org/all-solutions/zigbee/), and as such, that limitation applies to all Zigbee implementations, not just the Zigbee2MQTT implementation.

Another limitation that applies to all Zigbee implementations is that there is no such thing as "Zigbee over IP" or "Zigbee over LAN/WAN" in the Zigbee protocol specifications. It is therefore not possible to extend the same Zigbee network to two separate locations or sites that can not be reached directly via Zigbee radio signals within the Zigbee network mesh. That means that there is no way to use a so-called "Zigbee network adapter" or similar solutions to convert and bridge a single Zigbee network communication over a different medium such as Ethernet or VPN. As such there are no network-attached remote Zigbee adapters that can span a Zigbee network to remote sites, regardless if the marketing material of such products makes it sound like they can do in "Zigbee Router" mode. The fact is that the "Zigbee Router" feature of such "Zigbee network adapter" products puts their Zigbee radio chip into stand-alone mode so it works like any Zigbee Router device, disconnected from the Ethernet network part in those products.

Support for commissioning Zigbee 3.0 devices via "Install Code" or "QR Code" has so far only been implemented for 'zstack' (Texas Instruments ZNP) and 'ember' (Silicon Labs EmberZNet) adapter type radios in Zigbee2MQTT. Other radio adapter types are either missing support in their respective adapter/driver for [zigbee-herdsman](https://github.com/Koenkk/zigbee-herdsman) or more likely missing in the manufacturer's firmware commands/APIs and documentation.

Zigbee2MQTT does not currently support devices that can only use the ZSE ("Zigbee Smart Energy") profile, that is however due to the "Zigbee SE" specification not being part of the standard Zigbee 3.0 specification that includes the more common Zigbee Home Automation + Zigbee lighting and thus not implemented in most of the Zigbee Coordinator firmware that is commonly available for Zigbee Coordinator radio adapters and modules, usually because the manufacturer offers separate Zigbee protocol stack SDK for Zigbee Smart Energy.

## My network is unstable and/or performs poorly, what can I do?

- Try to restart the Zigbee device with poor/unstable connection. The route could be lost because of moving the coordinator to an other place at home.
- Read [Improve network range and stability](../../advanced/zigbee/02_improve_network_range_and_stability.md)

## Why does my device not or fail to pair?

This problem can be divided in 2 categories; no logging is shown at all OR interview fails.

### No logging is shown at all

- Make sure [joining is enabled](../usage/pairing_devices.md).
- There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 3 and 4.
- If you are using a Texas Instruments CC2652 or CC1352 based adapter, routers might be missing from the coordinator memory. Do a [coordinator check](../usage/mqtt_topics_and_messages.md#zigbee2mqtt-bridge-request-coordinator-check) and re-pair the missing routers.
- If you are using a Raspberry Pi, try disconnecting any other USB devices. If after that pairing works, try connecting the USB devices via a powered USB hub.
- Make sure that any other Zigbee networks/hubs are powered down. When you e.g. want to pair an IKEA bulb which was first paired to the IKEA gateway make sure to power down the IKEA gateway. If that doesn't help also try powering down all devices that are connected to the IKEA hub.
- If it's a battery powered device, try replacing the battery.
- You've hit the device limit of the coordinator, especially occurs when using the CC2531 or CC2530 in combination with the source routing firmware. Try reflashing the coordinator and immediately pair the device after starting Zigbee2MQTT.
- Try pairing the device closer to the coordinator.
- CC2531/CC2530 coordinator only:
    - Stop Zigbee2MQTT, unplug the coordinator, wait 10 seconds, plug the coordinator, start Zigbee2MQTT and try to pair the device again.
    - If none of the above helps, try to reflash the coordinator (does not require re-pairing of already paired devices).

### Interview fails

- Try pairing the device closer to the coordinator.
- There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 4.
- If it’s a battery powered device, try replacing the battery. Try to keep the device awake by pressing the button of the device (if any) every 3 seconds.
- Try re-pairing the device again for 2 or 3 times.
- This might be a Zigbee2MQTT bug, [Create a new issue](https://github.com/Koenkk/zigbee2mqtt/issues/new) with the debug logging attached to it. [How to enable debug logging](../configuration/logging.md#debugging).
- If device joins with `0x000000000000000` as `ieeeAddress` (you will see: `Starting interview of '0x0000000000000000'` in the Zigbee2MQTT log) your CC253X might be broken. [See issue #2761](https://github.com/Koenkk/zigbee2mqtt/issues/2761).
- In case the device is a bulb, try resetting it through [Touchlink](../usage/touchlink.md)
- Try pairing close to a bulb (light) router instead of the coordinator.

## How do I migrate from one adapter to another?

Want to migrate from e.g. a CC2530/CC2531 to a more powerful adapter (e.g. CC2652/CC1352)? Then follow these instructions below:

::: warning
Migration from one adapter to another requires backup and restore support which is so far only implemented for the `zstack` (Texas Instrument) and `ember` adapters. Backup and restore is **not supported** for any other adapters (`conbee`, `ezsp`, `zboss` and `zigate`).

Note that when switching from `zstack` -> `ember` or `ember` -> `zstack` re-pairing **might not** be required, however results might vary as this is not officially supported. After switching, check if all devices are working and re-pair the ones that are not. In case pairing new devices is not working, re-pair some routers close to the coordinator while only permitting joining via the coordinator. Pairing should then work via routers that have been re-paired.
:::

1. First make sure you are running the latest version of Zigbee2MQTT
1. Stop Zigbee2MQTT
1. Determine whether migrating [requires re-pairing of your devices](#what-does-and-does-not-require-re-pairing-of-all-devices)
    - If re-pairing is required: remove `data/coordinator_backup.json` (if it exists) and `data/database.db`
    - If re-pairing is **not** required: [copy the ieee address of the old adapter into the new one](../adapters/flashing/copy_ieeaddr.html)
1. Update the `serial` -> `port` in your `configuration.yaml`
1. Start Zigbee2MQTT

- If re-pairing was required:
    1. Disconnect power of all mains powered devices
    1. Start re-pairing devices 1 by 1
- If re-pairing was **not** required and your devices do not respond; restart some routers by removing them from the mains power for a few seconds.

## How do I move my Zigbee2MQTT instance to a different environment?

Details about your network are stored in both the coordinator and files under the `data/` directory. To move your instance to another environment move the contents of the `data` directory and update the path to your coordinator in your `configuration.yaml`. Now you can start Zigbee2MQTT.

## What does and does not require re-pairing of all devices?

### Requires re-pairing

You need to re-pair all you devices when:

- Changing the network key (`network_key`) or panID (`pan_id`) in `configuration.yaml`.
- Changing the Zigbee channel (`channel`) in the `configuration.yaml` might require re-pairing **some** devices, read the [documentation for more info](../configuration/zigbee-network.md#changing-the-zigbee-channel).
- Switching between adapters requires re-pairing, **except when**:
    - When the `serial.adapter` in the `configuration.yaml` is `zstack` or `ember` and the `serial.adapter` stays the same; e.g. `zstack` -> `zstack` re-pairing is **not** required.
        - There is one exception, when switching from a CC2531 or CC2530 (Z-Stack 1.2) to a CC2652/CC1352 (Z-Stack 3) re-pairing **is** required.
    - When switching from `zstack` -> `ember` or `ember` -> `zstack` re-pairing **might not** be required, however results might vary as this is not officially supported.
        - After switching, check if all devices are working and re-pair the ones that are not. In case pairing new devices is not working, re-pair some routers close to the coordinator while only permitting joining via the coordinator. Pairing should then work via routers that have been re-paired.

### Doesn't require re-pairing

You **don't** need to re-pair your devices when:

- Updating or downgrading Zigbee2MQTT to a different version.
- Updating the coordinator firmware.
    - If after flashing you fail to control your devices it helps to:
        - Wait a few minutes so that the Zigbee network can settle.
        - Send Zigbee commands (e.g. turn on/off) to the device.
        - Reboot the device (unplug and plug power).
- Switching the system running Zigbee2MQTT.
    - When doing this, make sure to copy over the contents of the `data` directory.

## Why are some links missing from my networkmap?

No worry, in case it happens with end devices (battery powered) it most of the times **does not** mean the devices aren't connected to the network map anymore.
Some end devices (e.g. Xiaomi door sensor) sleep for a too long time which causes the parent (router child ageing) to remove it from it from its child table. This is what causes the missing link. Even while its not in the child table anymore, the end device can still communicate via the router. This does not always happen since not all routers use child ageing (this is a Zigbee 3.0 feature).

## How to interpret RSSI and LQI values?

The network map shows multi-hop connections between your paired devices and their reported cumulative values of Received Signal Strength Indicator (RSSI) and Link Quality Indication (LQI). The exact method these values are reported depends on the Zigbee network stack used on each device. LQI values can be modified at each step as the message propagates through the mesh networking matrix.

Interpreting RSSI and LQI values is complex. Unless you are a Zigbee specialist yourself or are guided by one, please ignore those values. They can be misleading. If you delve into this, it is important to understand not to judge RSSI or LQI values on their own. When troubleshooting Zigbee messages that are being dropped, you must interpret the combination of both RSSI and LQI.

RSSI (Received Signal Strength Indicator) values are an indicator value of the raw signal strength between two devices. RSSI values are negative numbers in -dBm format (0 to -100 power ratio in decibels of the measured power referenced to one milliwatt). Lower negative values indicate less interference and a good signal. RSSI information is only between the endpoint device and the first hop from that device. As such, it may not necessarily show signal strength to the Zigbee Coordinator but instead could be showing signal strength to the nearest Zigbee Router device.

- Generally, anything -60 and above (meaning -50, -40, etc.) in RSSI should be considered a strong signal (not losing messages).
- Anything at -80 and below (meaning -85, -90, etc.) in RSSI should be considered a noisy environment and you risk losing messages.

LQI (Link Quality Index) values can be hard to interpret for Zigbee. This is because the Zigbee specifications and the (IEEE 802.15.4 specification) do not standardize how to perform LQI measurements. LQI values are shown as positive numbers on a scale. But because the value provided by the Zigbee devices is not measured using unified standards from all device manufacturers and Zigbee stacks, the values can not always be trusted. For example, Zigbee devices based on Silicon Labs EmberZNet stack use positive display numbers for LQI, where higher is better and lower is worse. The Texas Instruments Z-Stack computes LQI for each received packet from the raw “received signal strength index” (RSSI) by linearly scaling it between the minimum and maximum defined RF power levels for the radio that more or less just provides an LQI value that, based on the strength of the received signal. This can be misleading in case the user has a noisy environment with interference within the same frequency range (as the RSSI value may be shown as increased even though the true link quality decreases). Other manufacturers and Zigbee stacks measure and calculate LQI values in another way.

- In theory, an LQI value of 255 means a zero error rate, meaning it indicates absolute perfect link quality.
- In general, a positive high LQI value is better and a lower LQI value is worse. However, depending on your devices, that might not be the reality.
- Usually, if a device stays at an LQI value of 40+ or above then that link can usually be considered acceptable for normal operational conditions.

## Why is the `action` property always empty?

When the Home Assistant legacy action sensor is enabled (`homeassistant.legacy_action_sensor: true` in your `configuration.yaml`) the `action` property of your e.g. buttons will almost always be empty. Whenever an `action` is published e.g. `{"action": "single"}` it will be immediately followed up by a `{"action": ""}`. This is to trigger a state change in the Home Assistant action sensor (so that it can be used in e.g. automations).

## I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?

Definitely not! Example given: the default Zigbee2MQTT CC2531 firmware indeed supports 20 devices connected **directly** to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another [CC2530/CC2531 as a router](../../advanced/zigbee/05_create_a_cc2530_router.md) (which has a limit of 21 devices).

### Example

When using the default Zigbee2MQTT CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:

- Coordinator: 15 - 2 routers = 13
- Router 1: 21
- Router 2: 21
- **Device limit of 55 devices**

## Common error codes

A list of common error codes and what to do in case of them:

- `MAC_CHANNEL_ACCESS_FAILURE`: this happens when the wireless spectrum is too occupied. Mostly happens when a microwave is on or when there are WiFi networks on the same channel. See [Reduce Wifi interference by changing the Zigbee channel](../../advanced/zigbee/02_improve_network_range_and_stability.md#reduce-wifi-interference-by-changing-the-zigbee-channel) how to fix this.
- `NWK_TABLE_FULL`: [reported](https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560) to have same root cause as the above `MAC_CHANNEL_ACCESS_FAILURE`

## How do I run multiple instances of Zigbee2MQTT?

In case you setup multiple instances of Zigbee2MQTT it's important to use a different `base_topic` and `channel`. This can be configured in the [`configuration.yaml`](../configuration/README.md).

## Zigbee2MQTT crashes after some time

If after some uptime Zigbee2MQTT crashes with errors like: `SRSP - AF - dataRequest after 6000ms` or `SRSP - ZDO - mgmtPermitJoinReq after 6000ms` it means the adapter has crashed.

- Normally this can be fixed by replugging the adapter and restarting Zigbee2MQTT
- If you are using a CC2530 or CC2531 adapter consider upgrading to one of the [recommended adapters](../adapters/README.md). The CC2530/CC2531 is considered legacy hardware and runs into memory corruption easily.
- Make sure you are using the latest firmware on your adapter, see the [adapter page](../adapters/README.md) for a link to the latest firmware.
- If using a Raspberry Pi; this problem can occur if you are using a bad power supply or when other USB devices are connected directly to the Pi (especially occurs with external SSD), try connecting other USB devices through a powered USB hub.
- Disable the USB autosuspend feature, if `cat /sys/module/usbcore/parameters/autosuspend` returns `1` or `2` it is enabled; to disable execute:
    ```bash
    sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT="/&usbcore.autosuspend=-1 /' /etc/default/grub
    update-grub
    systemctl reboot
    ```
    - On a Raspberry Pi, you will need to instead edit `/boot/cmdline.txt` and add `usbcore.autosuspend=-1` to the end of the line.
