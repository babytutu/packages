<template>
  <div>
    <input type="text"
           v-model="code">
    <qrcode v-model="code"></qrcode>
    <qrcode v-model="code" type="img"></qrcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: 'abc',
    }
  }
}
</script>