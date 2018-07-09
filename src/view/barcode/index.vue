<template>
  <div>
    <input type="text"
           v-model="code">
    <barcode v-model="code"></barcode>
    <barcode v-model="code" type="img" :options="options"></barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: 'abc',
      options: {
        height: 200,
        displayValue: false,
        margin: 0
      }
    }
  }
}
</script>