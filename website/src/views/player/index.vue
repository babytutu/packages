<template>
<div class="demo">
  <ul>
    <li>支持wav格式和mp3格式在ie10+和chrome49+环境播放</li>
    <li>【默认】常规模式，可播放、暂停、调节播放进度、音量</li>
    <li>【可选】迷你模式，可播放、暂停、恢复弹窗、关闭、拖拽</li>
  </ul>
  <button @click="showDialog = true">打开弹窗播放</button>
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
          src: './static/sample.mp3',
        },
      ],
      showDialog: false,
    }
  },
}
</script>
