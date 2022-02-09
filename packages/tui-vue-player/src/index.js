import './vue-player/css.stylus'
import dialogPlayer from './vue-player/dialog-player.vue'
import vuePlayer from './vue-player/vue-player.vue'

export default {
  install: (Vue) => {
    Vue.component('vuePlayer', vuePlayer)
    Vue.component('dialogPlayer', dialogPlayer)
  },
  dialogPlayer,
  vuePlayer,
}
