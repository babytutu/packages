# tui-vue-highcharts[<img src="https://img.shields.io/npm/v/tui-vue-highcharts.svg">](https://www.npmjs.com/package/tui-vue-highcharts)

a vue highcharts component dependence on [highcharts](https://github.com/highcharts/highcharts-dist)

## Install

```bash
npm i tui-vue-highcharts
```

## Usage

```js
import highcharts from 'tui-vue-highcharts'
Vue.component('highcharts', highcharts)
```

```html
<template>
  <highcharts :options="options"></highcharts>
</template>
<script>
export default {
  data() {
    return {
      options: {
        series: [
          { name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],
      }
    }
  },
}
</script>
```

## Props

|Name|Desc|Type|Default|
|---|---|---|---|
|options|highcharts options|object|-|

### Options

> dependence highcharts

[options](https://api.highcharts.com/highcharts/)