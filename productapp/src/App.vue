<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" to="/list" event="mouseenter" >List</router-link>
          <router-link tag="li" to="/create" event="mouseenter">Create</router-link>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col m-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch("getProductsAction");
  },
}
</script>