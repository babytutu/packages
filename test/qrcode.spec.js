import qrcode from './../packages/tui-vue-qrcode/src'

describe('tui-vue-qrcode', () => {
  it('renders props.options.size = 200 when passed', () => {
    const size = 200
    expect(setupComponent(qrcode, {
      options: {
        size,
      }
    }).$el.width).toBe(size)
  })

  it('renders props.type = img when passed', () => {
    const type = 'img'
    expect(setupComponent(qrcode, {
      type,
    }).$el.tagName.toLowerCase()).toBe(type)
  })

})
