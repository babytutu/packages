export default {
  install: (Vue, options = {
    prefix: 'logger',
  }) => {
    const IS_DEBUG = typeof process !== 'undefined' ? process.env.NODE_ENV === 'development' : true
    const logTypes = ['info', 'log', 'warn', 'error', 'debug']

    /* eslint-disable-next-line no-console */
    const log = (type) => console[type]

    logTypes.map(type => {
      Vue.prototype[type] = (...args) => {
        if (!IS_DEBUG) return
        const pre = `[${options.prefix}::${type}]`.toUpperCase()
        // _isVue show filename & routename
        const vm = args[0]
        if (vm && vm._isVue) {
          const fileName = vm.$options._parentVnode ? vm.$options._parentVnode.componentOptions.Ctor.options.__file : '(unkonwn file name)'
          const routeName = vm.$route ? vm.$route.name : '(unkonwn route name)'
          args.shift()
          args.push(`[FILE:${fileName}] [ROUTE:${routeName}]`)
        }
        log(type)(pre, ...args)
      }
    })
  }
}