<template>
<div class="demo">
  <a class="btn btn-primary" @click="showPlayer = !showPlayer">音频播放</a>
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
