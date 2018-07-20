import swiper from './../packages/tui-vue-swiper/src'

const swiperSlideFactory = (values = {}) => {
  return setupComponent(swiper.swiperSlide, {
    ...values
  })
}

describe('tui-vue-swiper', () => {
  it('render swiperSlide', () => {
    const vm = swiperSlideFactory()
    expect(vm.$el.tagName.toLowerCase()).toBe('div')
  })
})