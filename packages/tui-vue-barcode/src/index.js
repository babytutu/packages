import JsBarcode from 'jsbarcode'

export default {
  name: 'barcode',
  props: {
    // 条形码code
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
    createBarcode() {
      if (this.$el) JsBarcode(this.$el, this.value, this.options)
    },
  },
  watch: {
    value() {
      this.createBarcode()
    },
    options() {
      this.createBarcode()
    }
  },
}
