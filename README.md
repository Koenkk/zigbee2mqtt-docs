# Zigbee2MQTT.io

[![Build ⚙ and Deploy 🚀 ](https://github.com/Koenkk/zigbee2mqtt.io/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/Koenkk/zigbee2mqtt.io/actions/workflows/build-deploy.yml)

This repository contains the [Zigbee2MQTT](https://zigbee2mqtt.io) documentation.

It is based on [VuePress v2](https://v2.vuepress.vuejs.org/).

## Architecture

**Directory-Structure:**

- `docgen`: Some scripts to test and generate the Device-Pages.
- `docs`: The current documentation.
- `docs/.vuepress`: Some VuePress enhancements like Stylesheets.
- `public`: Static assets.
- `supported-devices-component`: Vue.js component rendering the devices-overview page.
- `navbar.ts`: Configuration for the top navigation.
- `sidebar.ts`: Configuration for the sidebars by individual sections (like _Guide_).
- `vuepress.config.ts`: The [VuePress config file](https://v2.vuepress.vuejs.org/reference/config.html).

## Docgen

The docgen-scripts helps to generate and update the individual device-pages (`/docs/devices/*.md`).
[zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) exposes a list with supported devices which is used for generation. It also updates the Devices-List used by the _Supported-Devices_ overview page.

The `## Notes` section of each page is written by hand and does not come from `zigbee-herdsman-converters`. This section gets preserved and can be edited.

Docgen is written in Typescript, so you need a recent version of Node.js and NPM.

```bash
# One-time initialize package-lock.json otherwise 'pnpm i' may fail due tu dependancies
pnpm install

# Install dependencies
pnpm i --frozen-lockfile

# Run docgen
pnpm run docgen
```

### Docgen Tests

Docgen includes some scripts to help testing the page.

- `check-device-images`: Checks for missing device images
- `check-links`: Checks for broken internal links

**Attention**: `check-links` iterates over the generated VuePress files, so you have to build the page first!

## VuePress

Use Node.js 20 for building VuePress (other versions are not officially supported).

```bash
# Switch to node 20 (for nvm or nvm-compatible tool users)
nvm use

# Install dependencies
pnpm i --frozen-lockfile
```

### Building

```bash
# Run vuepress build
pnpm run build
```

The build-artifact gets written to `dist` directory.

### Development

```bash
# Run vuepress in dev mode with hot-reloading
pnpm run dev
```

The `dev`-Mode **excludes** the huge amount device-pages which slows down the build process drastically.
If you are interested in the device-pages you could include them by using the `pnpm run dev:devices` npm-run script.

#### Include specific device

When running in `dev`-Mode, you can also specify a device (but this device only) which you would like to include in the build process.
Useful when working on improving notes of just one device.  
`INCLUDE_DEVICE` variable should be supplied with device's filename (see [`/docs/devices`](/docs/devices/) folder), without the `.md.` extension.

```bash
# Run vuepress in dev mode with specific device included
npx cross-env INCLUDE_DEVICE=<DEVICE_FILE_NAME> pnpm run dev

# Example for TS011F_plug_1
npx cross-env INCLUDE_DEVICE=TS011F_plug_1 pnpm run dev
```

#### Change development port

You can change development server port when the default one (8080) is taken on your system.

```bash
# Run vuepress in dev mode on specified port
npx cross-env DEV_PORT=<PORT_NUMBER> pnpm run dev

# Example for port no 15080
npx cross-env DEV_PORT=15080 pnpm run dev
```

## Docker

You can also just use a docker-image include Node.js.

```bash
$ docker run --rm -v $PWD:/app -u $UID -ti node:18-slim bash
node@87e1438ef553:/$ cd /app
node@87e1438ef553:/app$ pnpm i --frozen-lockfile
node@87e1438ef553:/app$ pnpm run dev
```
