import QRious from 'qrious'

export default {
  name: 'qrcode',
  /**
   * @param {Number|String} value content
   * @param {String} type img/canvas
   * @param {Object} options QRious options @see https://github.com/neocotic/qrious#api
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
     * watching value change
     */
    value() {
      this.createQr()
    },
    /**
     * watching options change
     */
    options() {
      this.createQr()
    },
  },
  methods: {
    /**
     * QRious creat QRcode
     */
    createQr() {
      this.$nextTick(() => {
        new QRious({
          element: this.$el,
          value: String(this.value),
          ...this.options
        })
      })
    },
  },
}