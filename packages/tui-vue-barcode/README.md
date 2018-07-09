# tui-vue-barcode[<img src="https://img.shields.io/npm/v/tui-vue-barcode.svg">](https://www.npmjs.com/package/tui-vue-barcode)

a vue barcode component dependence on [JsBarcode](https://github.com/lindell/JsBarcode)

## Install

```bash
npm i tui-vue-barcode
```

## Usage

```js
import barcode from 'tui-vue-barcode'
Vue.component('barcode', barcode)
```

```html
<template>
  <barcode v-model="code"></barcode>
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
|value|barcode text|string/number|-|
|type|img or canvas|string|canvas|
|options|barcode options|object|-|

### Options

> dependence JsBarcode

[options](https://github.com/lindell/JsBarcode/wiki/Options)

