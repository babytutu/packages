const IS_DEBUG = process.env.NODE_ENV === 'development'
const defaultTypes = ['info', 'log', 'warn', 'error']

/* eslint-disable-next-line no-console */
const log = (type) => console[type]

export default {
  install: (Vue, options) => {
    const logtype = defaultTypes.concat(options.types || [])
    const prefix = typeof options.prefix === 'function' ?  options.prefix() : options.prefix

    logtype.map(type => {
      if (log(type)) {
        Vue.prototype[type] = (vm, ...args) => {
          if (!IS_DEBUG) return
          const pre = `[${prefix ? prefix + '::' + type : type}]`.toUpperCase()
          // 当首个参数是vm实例时，输出文件路径和路由名称
          if (vm && vm._isVue) {
            const filename = vm.$options._parentVnode.componentOptions.Ctor.options.__file
            const routeName = vm.$route.name || '(unkonwn route name)'
            args.push(`[FILE:${filename}]`, `[ROUTE:${routeName}]`)
            log(type)(pre, ...args)
          } else {
            log(type)(pre, vm, ...args)
          }
        }
      }
    })
  }
}