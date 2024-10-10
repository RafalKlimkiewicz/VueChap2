<template>
  <div class="bg-primary text-white text-center m-2 p-3">
    <h3>Product: <span v-text="name"></span></h3>
  </div>
  <button v-on:click="handleClick" class="btn btn-primary">
    Press mee
  </button>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "kamizelafi  ratunkowa"
    }
  },
  methods: {
    handleClick() {
    }
  },
}
</script>