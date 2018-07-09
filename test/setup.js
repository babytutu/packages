require('jsdom-global')()
global.expect = require('expect')

const Vue = require('vue')

/**
 * 挂载元素并返回vm的工具函数
 * @param {*} Component 组件
 * @param {object} propsData props
 * @returns {object} vm
 */
global.setupComponent = (Component, propsData) => {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm
}
