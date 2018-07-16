import Highcharts from 'highcharts/highcharts'

export default {
  name: 'highcharts',
  /**
   * @param {Object} options highcharts options @see https://api.highcharts.com/highcharts
   */
  props: {
    options: Object,
  },
  render(h) {
    return h('div', this.$slots.default)
  },
  mounted() {
    this.createHighcharts()
  },
  watch: {
    /**
     * watching options change
     */
    options() {
      this.createHighcharts()
    },
  },
  methods: {
    /**
     * Generate the chart
     */
    createHighcharts() {
      Highcharts.chart(this.$el, this.options)
    },
  },
}