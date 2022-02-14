# tui-vue-player[<img src="https://img.shields.io/npm/v/tui-vue-player.svg">](https://www.npmjs.com/package/tui-vue-player)

a vue audio player component

## Install

```bash
npm i tui-vue-player
```

## Usage

```js
import vuePlayer from 'tui-vue-player'
Vue.use(vuePlayer)

```

```vue
<template>
<div class="demo">
  <a class="btn btn-primary" @click="showPlayer = true">音频播放</a>
  <vuePlayer v-if="showPlayer" ref="player" miniable :rates="[1,2,3]" :list="list" @close="showPlayer = false" />
</div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: 'horse',
          src: 'https://www.runoob.com/try/demo_source/horse.ogg',
        },
      ],
      showPlayer: false,
    }
  },
}
</script>
```

# Props

|参数|类型|说明|
|---|---|---|
|list|Array|音频文件数组|
|miniable|Boolean|是否可最小化，默认否|
|rates|Array|倍速，默认[0.5, 1, 2]|

# Events

## close

关闭播放器
