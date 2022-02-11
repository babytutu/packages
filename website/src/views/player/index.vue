<template>
<div class="demo">
  <ul>
    <li>支持wav格式和mp3格式在ie10+和chrome49+环境播放</li>
    <li>【默认】常规模式，可播放、暂停、调节播放进度、音量</li>
    <li>【可选】迷你模式，可播放、暂停、恢复弹窗、关闭、拖拽</li>
  </ul>
  <a class="btn btn-primary" @click="showDialog = true">打开弹窗播放</a>
  <dialogPlayer miniable :list="list" v-model="showDialog" v-if="showDialog" />
  <vuePlayer ref="player" :list="list" />
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
        {
          name: 'horse',
          src: 'https://www.runoob.com/try/demo_source/horse.ogg',
        },
      ],
      showDialog: false,
    }
  },
  /**
   * 路由变更关闭
   */
  beforeRouteLeave(to, from, next) {
    this.$refs.player.closePlayer()
    next()
  },
}
</script>
