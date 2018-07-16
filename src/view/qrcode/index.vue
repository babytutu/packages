<template>
  <div>
    <input type="text"
           v-model="code">
    <input type="text" v-model="size">
    <qrcode v-model="code" :options="options"></qrcode>
    <qrcode v-model="code" type="img"></qrcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: 'a',
      size: 100
    }
  },
  computed: {
    options() {
      return {
        size: this.size
      }
    }
  },
  created() {
    this.log(this)
    this.warn(123)
    this.info(123)
    this.error(111)
    this.debug(2222)
  }
}
</script>