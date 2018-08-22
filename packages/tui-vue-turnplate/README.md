# tui-vue-turnplate[<img src="https://img.shields.io/npm/v/tui-vue-turnplate.svg">](https://www.npmjs.com/package/tui-vue-turnplate)

a vue turnplate component by canvas

## Install

```bash
npm i tui-vue-turnplate
```

## Usage

```js
import turnplate from 'tui-vue-turnplate'
import 'tui-vue-turnplate/src/style.css'

Vue.component('turnplate', turnplate)
```

```html
<template>
  <div class="turn">
    <turnplate :gift="prizeList"
               :get-result="getResult"
               :disabled="disabled"
               :show-gift="showGift">{{disabled ? 'OVER' : 'GO'}}</turnplate>
    <div class="gift" v-if="show">{{gift.type === 3 ? gift.name : `恭喜获得${gift.name}${gift.content}`}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prizeList: [{
          type: 1,
          number: 1,
          name: '一等奖',
          content: '电子券50-50',
        },
        {
          type: 1,
          number: 2,
          name: '二等奖',
          content: '电子券30-30',
        },
        {
          type: 1,
          number: 3,
          name: '三等奖',
          content: '电子券20-20',
        },
        {
          type: 1,
          number: 4,
          name: '四等奖',
          content: '电子券10-10',
        },
        {
          type: 2,
          number: 5,
          name: '五等奖',
          content: '玩偶',
        },
        {
          type: 3,
          number: 6,
          name: '谢谢参与',
          content: '',
        },
      ],
      gift: {},
      show: false,
      disabled: false
    }
  },
  methods: {
    getResult() {
      return new Promise((resolve, reject) => {
        const num = Math.round(Math.random()*5)
        this.gift = this.prizeList[num]
        resolve(this.gift.number)
      })
    },
    showGift() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1500)
    }
  },
}
</script>
<style lang="stylus"
       scoped>
.turn
  position relative
  width 300px
  height 300px

.gift
  position absolute
  z-index 33
  width 200px
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding 10px
  background #fff
  text-align center
</style>
```

## Props

|Name|Desc|Type|Default|
|---|---|---|---|
|gift|gift|array|-|
|disabled|disabled?|Boolean|false|
|get-result|get result|function|-|
|show-gift|show gift|function|-|
|fontColor|fontColor|array|['#EF1C85','#9D5BFB','#A8A8A8',]|
|rotate|rotate?|Boolean|false|
|colors|colors|array|['#EAE4FD', '#FFFFFF']|