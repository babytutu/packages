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
      <label for="height">Height</label>
      <select v-model="height"
              class="form-control">
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <barcode v-model="code"
             :options="options"></barcode>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code: 'Hello, World!',
      height: 100
    }
  },
  computed: {
    options () {
      return {
        height: this.height
      }
    }
  }
}
</script>
