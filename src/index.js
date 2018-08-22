import Vue from 'vue'
import App from './app.vue'
import router from './router'
import qrcode from '@pkg/tui-vue-qrcode/src'
import barcode from '@pkg/tui-vue-barcode/src'
import Logger from '@pkg/tui-vue-logger/src'
import highcharts from '@pkg/tui-vue-highcharts/src'
import swiper from '@pkg/tui-vue-swiper/src'
import turnplate from '@pkg/tui-vue-turnplate/src'

import '@pkg/tui-vue-turnplate/src/style.css'
Vue.use(Logger, {
  prefix: 'test',
})

Vue.component('qrcode', qrcode)
Vue.component('barcode', barcode)
Vue.component('highcharts', highcharts)
Vue.component('swiper', swiper.swiper)
Vue.component('swiperSlide', swiper.swiperSlide)
Vue.component('turnplate', turnplate)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})