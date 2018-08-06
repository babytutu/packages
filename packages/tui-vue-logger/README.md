# tui-vue-logger[<img src="https://img.shields.io/npm/v/tui-vue-logger.svg">](https://www.npmjs.com/package/tui-vue-logger)
> Console Types: 'info', 'log', 'warn', 'error', 'debug'

## Install

```bash
npm install tui-vue-logger -D
```

or

```html
  <script src="./tui-vue-logger.min.js"></script>
```

## Usage

```js
import Vue from 'vue'
import Logger from 'tui-vue-logger'

Vue.use(Logger)

// custom perfix
Vue.use(Logger, {
  prefix: 'test'
})

new Vue({
  el: '#app',
  created() {
    this.log('Hello World!')
  }
})
```

or

```html
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
  <script src="https://unpkg.com/tui-vue-logger@0.1.8/dist/tui-vue-logger.min.js"></script>
</head>

<body>
  <div id="app">Open Console</div>
  <script>
    Vue.use(tuiVueLogger)

    new Vue({
      el: '#app',
      created() {
        this.log('Hello World!')
      }
    })
  </script>
</body>
</html>
```


If frist params is `this`, will output `file` & `route` at the end of logger
```js
this.debug(this, 1, 2, 3)
// [TEST::DEBUG] 1 2 3 [FILE:src/views/home/home.vue] [ROUTE:home]
this.info(1, 2, 3)
// [TEST::INFO] 1 2 3
this.error(3)
// [TEST::ERROR] 3
this.warn(4)
// [TEST::WARN] 4
this.log(5)
// [TEST::LOG] 5
```

## Options

| Name   | Desc   | Type   | Default  |
| ------ | ------ | ------ | -------- |
| prefix | prefix | String | logger |
