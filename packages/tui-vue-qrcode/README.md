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

[options](https://github.com/neocotic/qrious#api)