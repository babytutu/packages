<template>
  <div>
    <div class="form-group">
      <label for="code">Code</label>
      <input type="text"
             class="form-control"
             placeholder="Enter code"
             v-model="code">
    </div>
    <div class="form-group">
      <label for="size">Size</label>
      <select v-model="size"
              class="form-control">
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <qrcode v-model="code"
            :options="options"></qrcode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: 'Hello World!',
      size: 100
    }
  },
  computed: {
    options () {
      return {
        size: this.size
      }
    }
  }
}
</script>
