<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-bind:style="elemClasses" class="display-4">Product: {{ name }}</h3>
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
      highlight: false,
    }
  },
  computed:{
    elemClasses(){
      return {
        "border" : "5px solid red",
        "background-color" : this.highlight ? "coral" : "",
      }
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    }
  }
}
</script>
<style>
h3:first-child {
  background-color: aquamarine;
  padding: 10px;
  color: black;
}
</style>