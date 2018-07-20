import Vue from 'vue'
import swiper from './../packages/tui-vue-swiper/src'

import tuiVueSwiper from './../packages/tui-vue-swiper/src'

const swiperFactory = (values = {}) => {
  return setupComponent(swiper.swiper, {
    ...values
  })
}

describe('tui-vue-swiper', () => {
  it('install', done => {
    Vue.use(tuiVueSwiper)
    done()
  })

  it('render mySwiper', () => {
    const vm = swiperFactory()
    expect(typeof vm.$data.mySwiper).toBe('object')
  })

  it('renders swiper with height: 400px', () => {
    const height = 400
    const vm = swiperFactory({
      height
    })
    expect(vm.$el.style.height).toBe(`${height}px`)
  })

  it('creatSwiper is function', () => {
    const vm = swiperFactory()
    expect(typeof vm.creatSwiper).toBe('function')
  })

  it('watch options change', () => {
    let options = {
      loop: true
    }
    const vm = swiperFactory({
      options
    })

    vm.options = {
      loop: false
    }

    expect(vm.options.loop).toBe(false)
  })

})