# tui-vue-logger[<img src="https://img.shields.io/npm/v/tui-vue-logger.svg">](https://www.npmjs.com/package/tui-vue-logger)
> console types: 'info', 'log', 'warn', 'error', 'debug'

## Install

```bash
npm install tui-vue-logger -D
```

## Usage

```js
import Vue from 'vue'

import Logger from 'tui-vue-logger'

Vue.use(Logger)

// custom perfix
Vue.use(Logger, {
  prefix: 'xxx'
})
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
