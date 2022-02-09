# tui-vue-player[<img src="https://img.shields.io/npm/v/tui-vue-swiper.svg">](https://www.npmjs.com/package/tui-vue-swiper)

a vue audio player component

## Install

```bash
npm i tui-vue-player
```

## Usage

```js
import player from 'tui-vue-player'

Vue.use(player)

// or
import player from 'tui-vue-player'

Vue.component('vuePlayer', player.vuePlayer)
Vue.component('dialogPlayer', player.dialogPlayer)

// or load js with script
Vue.use(tuiVuePlayer)
```

```vue
<template>
<div class="demo">
  <ul>
    <li>支持wav格式和mp3格式在ie10+和chrome49+环境播放</li>
    <li>【默认】常规模式，可播放、暂停、调节播放进度、音量</li>
    <li>【可选】迷你模式，可播放、暂停、恢复弹窗、关闭、拖拽</li>
  </ul>
  <el-button type="text" @click="showDialog = true">打开弹窗播放</el-button>
  <dialogPlayer miniable :list="list" v-model="showDialog" v-if="showDialog" />
  <vuePlayer :list="list" />
</div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: 'Not a Sad Song.mp3',
          src: 'sample.mp3',
        },
      ],
      showDialog: false,
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


# Events

## change

|参数|类型|说明|
|---|---|---|
|val|boolean|是否迷你模式|

## close

关闭弹窗
