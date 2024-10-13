<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-if="counter % 3 == 0">Product: {{ name }}</h3>
      <h3 v-else-if="counter % 3 == 1">Price: {{ price }}</h3>
      <h3 v-else> Category: {{ category }}</h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">
      Press mee
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Product_Name",
      price: 275,
      category: "Category_Type",
      counter: 0,
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  },
}
</script>
<style>
h3:first-child {
  background-color: aquamarine;
  padding: 10px;
  color: black;
}
</style>