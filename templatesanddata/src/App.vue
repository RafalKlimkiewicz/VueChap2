<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Amout: {{ amount }}, Amout + 10 = {{ amount + 10 }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Amout</label>
        <input v-model.number.lazy="amount" type="number" class="form-control" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      amount: 100
    }
  }
}
</script>