<template>
  <div class="container-fluid">
    <div class="bg-primary p-4 text-white h3">
      {{ message }}
    </div>
    <input class="from-control bg-light" placeholder="Enter text" v-on:keydown.ctrl.exact="handleKey"/>

  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      message: "Ready"
    }
  },
  methods: {
    handleKey($event) {
      this.message = $event.key;
    }
  }
}
</script>