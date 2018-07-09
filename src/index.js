import Vue from 'vue'
import App from './app.vue'
import router from './router'
import qrcode from '@pkg/tui-vue-qrcode/src'

Vue.component('qrcode', qrcode)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})