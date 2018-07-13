import logger from './../packages/tui-vue-logger/src'

const vm = new Vue()

describe('Vue logger', () => {
  before(() => {
    Vue.use(logger)
  })

  it('vm.log should be defined', () => {
    expect(vm.log).toBeDefined()
    expect(vm.info).toBeDefined()
    expect(vm.warn).toBeDefined()
    expect(vm.error).toBeDefined()
    expect(vm.debug).toBeDefined()
  })

  it('vm.xxx should be undefined', () => {
    expect(vm.xxx).toBeUndefined()
  })

  it('should be console', done => {
    const str = 'hello world'
    vm.$route = {
      name: '123'
    }
    vm.log(vm, str)
    vm.log(str)
    vm.info(str)
    vm.warn(str)
    vm.error(str)
    vm.debug(str)
    done()
  })

})