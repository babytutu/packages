# tui-vue-qrcode[<img src="https://img.shields.io/npm/v/tui-vue-qrcode.svg">](https://www.npmjs.com/package/tui-vue-qrcode)

a vue qrcode component dependence on [qrious](https://github.com/neocotic/qrious)

## Install

```bash
npm i tui-vue-qrcode
```

## Usage

```js
import qrcode from 'tui-vue-qrcode'
Vue.component('qrcode', qrcode)
```

```html
<template>
  <qrcode v-model="code"></qrcode>
</template>
<script>
export default {
  data() {
    return {
      code: 12345678,
    }
  },
}
</script>
```

## Props

|Name|Desc|Type|Default|
|---|---|---|---|
|value|qrcode text|string/number|-|
|type|img or canvas|string|canvas|
|options|qrcode options|object|-|

### Options

> dependence qrious

| Field           | Type    | Description                                        | Default       | Read Only |
| --------------- | ------- | -------------------------------------------------- | ------------- | --------- |
| background      | String  | Background color of the QR code                    | `"white"`     | No        |
| backgroundAlpha | Number  | Background alpha of the QR code                    | `1.0`         | No        |
| element         | Element | Element to render the QR code                      | `<canvas>`    | Yes       |
| foreground      | String  | Foreground color of the QR code                    | `"black"`     | No        |
| foregroundAlpha | Number  | Foreground alpha of the QR code                    | `1.0`         | No        |
| level           | String  | Error correction level of the QR code (L, M, Q, H) | `"L"`         | No        |
| mime            | String  | MIME type used to render the image for the QR code | `"image/png"` | No        |
| padding         | Number  | Padding for the QR code (pixels)                   | `null` (auto) | No        |
| size            | Number  | Size of the QR code (pixels)                       | `100`         | No        |
| value           | String  | Value encoded within the QR code                   | `""`          | No        |