<template>
  <div class="swiper">
    <div class="form-group">
      <label for="height">Height</label>
      <select v-model="height"
              class="form-control">
        <option value="100">100</option>
        <option value="300">300</option>
      </select>
    </div>
    <swiper :height="height" :options="options">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
      <swiper-slide>5</swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="next" class="swiper-button-next"></div>
      <div slot="prev" class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 300
    }
  },
  computed: {
    options() {
      return {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
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
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color:#000;
  opacity: 1;
  background: rgba(0,0,0,0.2);
}
.swiper-pagination-bullet-active {
  color:#fff;
  background: #007aff;
}
</style>
