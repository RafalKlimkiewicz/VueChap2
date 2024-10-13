<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3 v-bind:text-content.prop="textContent" >Product: {{ name }}</h3>
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
    textContent(){
      return this.highlight ? "highlight!" :`Product ${this.name}`;
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
[data-size=big] {
  font-size: 40pt;
}

[data-size=small] {
  font-size: 20pt;
}
</style>