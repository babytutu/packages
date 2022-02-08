<template>
  <div>
    <div class="form-group">
      <label for="height">Height</label>
      <select v-model="height"
              class="form-control">
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <select v-model="type"
              class="form-control">
        <option value="line">line</option>
        <option value="pie">pie</option>
        <option value="bar">bar</option>
        <option value="column">column</option>
      </select>
    </div>
    <highcharts :options="options"></highcharts>
  </div>
</template>
<script>
export default {
  data () {
    return {
      height: 200,
      type: 'line'
    }
  },
  computed: {
    options () {
      return {
        series: [{
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
        chart: {
          height: this.height,
          type: this.type
        },
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        legend: {
          enabled: false
        }
      }
    }
  }
}
</script>
