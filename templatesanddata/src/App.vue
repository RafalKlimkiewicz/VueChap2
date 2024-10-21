<template>
  <div class="container-fluid">
    <div class="bg-primary m-2 p-2 text-white">
      Name: {{ name }}, Category: {{ category }}, Price: {{ price }}
    </div>

    <div class="bg-danger text-white my-2 p-2" v-if="errors">
      <h5>Errors:</h5>
      <ul>
        <template v-for="(errors) in validationErrors">
          <li v-for="error in errors" v-bind:key="error"> {{ error }}</li>
        </template>
      </ul>
    </div>

    <form v-on:submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="form-control" />
      </div>

      <div class="form-group">
        <label>Category</label>
        <input v-model="category" class="form-control" />
      </div>

      <div class="form-group">
        <label>Price</label>
        <input v-model.number="price" type="number" class="form-control" />
      </div>

      <div class="text-center">
        <button class="btn btn-primary" type="submit">Send</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "",
      category: "",
      price: 0
    }
  },
  methods: {
    handleSubmit() {
      console.log(`Sent form : ${this.name} ${this.category} ${this.price}`);
    }
  }
}
</script>