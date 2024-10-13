<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-if="showElements">Product: {{ name }}</h3>
      <h3 v-else>Price: {{ price }}</h3>
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
      fragment: `<div class="form-group"> Password <input class="form-control" /> </div>`,
      price : 275,
      showElements: true,
    }
  },
  methods: {
    handleClick() {
      this.showElements = !this.showElements;
    }
  },
}
</script>