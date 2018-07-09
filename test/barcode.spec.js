import barcode from './../packages/tui-vue-barcode'

describe('tui-vue-barcode', () => {
  it('renders props.options.height = 200 when passed', () => {
    const height = 200
    expect(setupComponent(barcode, {
      options: {
        height,
        displayValue: false,
        margin: 0
      }
    }).$el.height).toBe(height)
  })

  it('renders props.type = img when passed', () => {
    const type = 'img'
    expect(setupComponent(barcode, {
      type,
    }).$el.tagName.toLowerCase()).toBe(type)
  })

})
