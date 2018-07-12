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
  }
}
</script>