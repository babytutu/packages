const QRious = require('qrious')

module.exports = {
  name: 'qrcode',
  /**
   * @param {Number|String} value 二维码的内容
   * @param {String} type 二维码模式。img/canvas
   * @param {Object} options 更多配置
   */
  props: {
    value: {
      type: [Number,String],
      default: '',
    },
    type: {
      type: String,
      default: 'canvas'
    },
    options: Object,
  },
  render(h) {
    return h(this.type, this.$slots.default)
  },
  mounted() {
    this.createQr()
  },
  watch: {
    /**
     * 监听内容源是否有发生变化
     */
    value() {
      this.createQr()
    },
    /**
     * 监听配置是否有发生变化
     */
    options() {
      this.createQr()
    },
  },
  methods: {
    /**
     * 生成二维码
     */
    createQr() {
      let options = Object.assign({
        element: this.$el,
        value: String(this.value),
      }, this.options)
      if (this.$el) {
        new QRious(options)
      }
    },
  },
}