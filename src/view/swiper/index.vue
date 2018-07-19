<template>
  <div class="swiper">
    <swiper :height="400" :options="options">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div slot="button-prev" class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  computed: {
    options() {
      return {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      }
    }
  },
}
</script>
<style lang="stylus">
.swiper
  height 500px
</style>
