<template>
  <highcharts :options="options"></highcharts>
</template>
<script>
export default {
  data() {
    return {
      options: {
        series: [
          { name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],
      }
    }
  },
}
</script>