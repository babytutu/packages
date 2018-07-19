export default {
  name: 'swiper-slide',
  render(h) {
    return h('div', {
      class: 'swiper-slide'
    }, this.$slots.default)
  }
}