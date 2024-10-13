<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <h3>Product: </h3>
      <span v-text="fragment"></span>
      <span v-html="fragment"></span>
      <ul class="text-left">
        <li>List element:</li>
        <li v-if="showElements"> 
          {{ name }}
          <!-- 2nd way -->
          <span v-text="name"></span> 
        </li>
        <li v-if="showElements">{{ price }}</li>
        <template v-if="showElements">
          <li> {{ name }} interpolation <span v-text="name"></span>  inside template</li>
          <li>{{ price }} interpolation inside template</li>
        </template>
        <li>other element </li>
        <li>other element </li>
      </ul>
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
      name: "ProdName",
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