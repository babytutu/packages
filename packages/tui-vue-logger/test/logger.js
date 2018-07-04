import Vue from 'vue'
import logger from './../src/index'

describe('Vue logger', () => {
  before(() => {
    Vue.use(logger, {
      types: ['debug']
    })
  })

  it("should print the log", function(done) {
    const vm = new Vue()
    const str = 'hello world'
    vm.log(str)
    vm.info(str)
    vm.warn(str)
    vm.error(str)
    vm.debug(str)
    done()
  })

})