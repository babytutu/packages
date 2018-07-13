import Vue from 'vue'
import App from './app.vue'
import router from './router'
import qrcode from '@pkg/tui-vue-qrcode/src'
import barcode from '@pkg/tui-vue-barcode/src'
import Logger from '@pkg/tui-vue-logger/src'

Vue.use(Logger, {
  prefix: 'test',
})

Vue.component('qrcode', qrcode)
Vue.component('barcode', barcode)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})