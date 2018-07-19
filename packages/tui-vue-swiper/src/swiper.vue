<template>
  <div class="swiper-container"
       :style="{
    height: `${height}px`
  }">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-next"></slot>
    <slot name="button-prev"></slot>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'swiper',
  props: {
    options: {
      type: Object,
    },
    height: Number,
  },
  data() {
    return {
      mySwiper: ''
    }
  },
  mounted() {
    this.creatSwiper()
  },
  watch: {
    options() {
      this.creatSwiper()
    }
  },
  methods: {
    creatSwiper() {
      this.mySwiper = new Swiper(this.$el, this.options)
    }
  },
  destroyed() {
    this.mySwiper = ''
  }
}
</script>
<style lang="stylus">
@import 'https://unpkg.com/swiper@4.3.3/dist/css/swiper.min.css'
</style>
