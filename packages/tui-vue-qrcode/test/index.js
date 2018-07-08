const expect = require('expect')
import Vue from 'vue/dist/vue.runtime'
import qrcode from './../src/index'

describe('Vue qrcode', () => {
  it('The default type is canvas', () => {
    const vm = new Vue(qrcode).$mount()
    expect(vm.type).toBe('canvas')
  })
})