import highcharts from './../packages/tui-vue-highcharts/src'

const factory = (values = {}) => {
  return setupComponent(highcharts, {
    ...values
  })
}

const series = [
  { name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }
]

describe('tui-vue-highcharts', () => {
  it('renders props.options.height = 200 when passed', () => {
    const vm = factory({
      options: {
        series,
      }
    })
    expect(vm.$el.childNodes[0].style.height).toBe('400px')
  })


  it('watch props.options changed', (done) => {
    const vm = factory({
      options: {
        chart: {
          height: 200,
        },
        series,
      }
    })
    expect(vm.$el.childNodes[0].style.height).toBe('200px')
    vm.options = {
      chart: {
        height: 100,
      },
      series,
    }

    vm.$nextTick(() => {
      expect(vm.$el.childNodes[0].style.height).toBe('100px')
      done()
    })
  })

  it('methods is a function', () => {
    const vm = factory({
      options: {
        series,
      }
    })
    expect(typeof vm.createHighcharts).toBe('function')
  })
})
