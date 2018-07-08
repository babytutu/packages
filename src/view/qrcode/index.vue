<template>
  <div>
    <input type="text"
           v-model="code">
    <qrcode v-model="code"></qrcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: 12345678,
    }
  },
}
</script>