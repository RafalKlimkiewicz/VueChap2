<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-bind:class="elemClasses" class="display-4">Product: {{ name }}</h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">
      Press mee
    </button>
    <button v-on:click="handleClick2" class="btn btn-primary">
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
      highlight2: false,
    }
  },
  computed:{
    elemClasses(){
      return {
        "text-dark" : this.highlight,
        "text-light" : this.highlight2,
      }
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    },
    handleClick2(){
      this.highlight2 = !this.highlight2;
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