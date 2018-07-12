import barcode from './../packages/tui-vue-barcode/src'

const factory = (values = {}) => {
  return setupComponent(barcode, {
    ...values
  })
}

describe('tui-vue-barcode', () => {
  it('renders props.options.height = 200 when passed', () => {
    const height = 200
    expect(factory({
      options: {
        height,
        displayValue: false,
        margin: 0
      }
    }).$el.height).toBe(height)
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
    expect(vm.options.size).toBe(100)
    vm.options = {
      size: 200
    }

    vm.$nextTick(() => {
      expect(vm.options.size).toBe(200)
      done()
    })
  })

})
