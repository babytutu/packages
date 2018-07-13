import qrcode from './../packages/tui-vue-qrcode/src'

const factory = (values = {}) => {
  return setupComponent(qrcode, {
    ...values
  })
}

describe('tui-vue-qrcode', () => {

  it('renders props.options.size = 200 when passed', () => {
    const size = 200
    expect(factory({
      options: {
        size
      }
    }).$el.width).toBe(size)
  })

  it('renders props.type = img when passed', () => {
    const type = 'img'
    expect(factory({
      type,
    }).$el.tagName.toLowerCase()).toBe(type)
  })

  it('watch props.value changed', () => {
    const vm = factory({
      value: 'a',
      type: 'img'
    })
    const oldval = vm.$el.src

    vm.value = 2

    vm.$nextTick(() => {
      expect(vm.$el.src).not.toBe(oldval)
    })
  })

  it('watch props.options changed', (done) => {
    const vm = factory({
      options: {
        size: 100
      }
    })
    expect(vm.$el.width).toBe(100)
    vm.options = {
      size: 200
    }

    vm.$nextTick(() => {
      expect(vm.$el.width).toBe(200)
      done()
    })
  })

  it('methods is a function', () => {
    const vm = factory()
    expect(typeof vm.createQr).toBe('function')
  })
})
