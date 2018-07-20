import Swiper from 'swiper'
import swiper from './swiper'
import swiperSlide from './swiper-slide'

export default {
  install: (Vue) => {
    Vue.component(swiper.name, swiper)
    Vue.component(swiperSlide.name, swiperSlide)
  },
  Swiper,
  swiper,
  swiperSlide,
}