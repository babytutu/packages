import swiper from './swiper.vue'
import swiperSlide from './swiper-slide'

export default {
  install: (Vue) => {
    Vue.component('swiper', swiper)
    Vue.component('swiper-slide', swiperSlide)
  },
  swiper,
  swiperSlide,
}

export { swiper, swiperSlide }
