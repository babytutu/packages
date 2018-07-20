import Swiper from 'swiper'

export default {
  name: 'swiper',
  props: {
    options: {
      type: Object,
    },
    height: [Number,String],
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
  render(h) {
    return h('div', {
      class: 'swiper-container',
      style: {
        height: `${this.height}px`
      }
    }, [h('div', {
      class: 'swiper-wrapper'
    }, this.$slots.default),
    this.$slots.pagination,
    this.$slots.next,
    this.$slots.prev])
  }
}