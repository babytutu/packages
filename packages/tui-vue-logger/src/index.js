const IS_DEBUG = process.env.NODE_ENV === 'development'
const logTypes = ['info', 'log', 'warn', 'error', 'debug']
const color = 'orange'
const prefix = 'logger'

/* eslint-disable-next-line no-console */
const log = (type) => console[type]

export default {
  install: (Vue, options = {
    prefix,
    color
  }) => {
    logTypes.map(type => {
      if (log(type)) {
        Vue.prototype[type] = (vm, ...args) => {
          if (!IS_DEBUG) return
          const pre = `[${options.prefix || prefix}::${type}]`.toUpperCase()
          // _isVue show filename & routename
          if (vm && vm._isVue) {
            const fileName = vm.$options._parentVnode ? vm.$options._parentVnode.componentOptions.Ctor.options.__file : '(unkonwn file name)'
            const routeName = vm.$route ? vm.$route.name : '(unkonwn route name)'
            args.push(`[FILE:${fileName}] [ROUTE:${routeName}]`)
            log(type)(`%c${pre}`,`color:${options.color || color}`, ...args)
          } else {
            log(type)(`%c${pre}`,`color:${options.color || color}`, vm, ...args)
          }
        }
      }
    })
  }
}