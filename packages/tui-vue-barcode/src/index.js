import JsBarcode from 'jsbarcode'

export default {
  name: 'barcode',
  /**
   * @param {Number|String} value content
   * @param {String} type img/canvas
   * @param {Object} options jsbarcode options @see https://github.com/lindell/JsBarcode/wiki/Options
   */
  props: {
    value: {
      type: [Number, String],
      default: ' ',
    },
    type: {
      type: String,
      default: 'canvas'
    },
    options: Object,
  },
  mounted() {
    this.createBarcode()
  },
  render(h) {
    return h(this.type, this.$slots.default)
  },
  methods: {
    /**
     * JsBarcode creat barcode
     */
    createBarcode() {
      this.$nextTick(() => {
        JsBarcode(this.$el, this.value, this.options)
      })
    },
  },
  watch: {
    /**
     * watching value change
     */
    value() {
      this.createBarcode()
    },
    /**
     * watching options change
     */
    options() {
      this.createBarcode()
    }
  },
}
