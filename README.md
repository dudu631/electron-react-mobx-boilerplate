
# Electron & React & Mobx - Boilerplate

Boilerplate for starting an Electron project, powered by React with Mobx.

Decided to make my own, after many different ways of starting an Electron app.


## Start

Install dependencies

```bash
  npm install
```
or
```bash
  yarn
```

## Developing

```bash
npm start dev
```
or
```bash
yarn dev
```

This will start both main and renderer project, with debug panel enabled by default.
## Distribution

```bash
npm start electron-pack
```
or
```bash
yarn electron-pack
```

A portable .exe will be generated at ./dist folder.