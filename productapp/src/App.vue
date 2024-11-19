<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" to="/list" event="mouseenter">List</router-link>
          <router-link tag="li" to="/create">Create</router-link>
          <router-link tag="li" to="/edit" exact>Edit</router-link>
          <router-link tag="li" to="/edit/1">Edit Kajak</router-link>
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
<style scoped>
router-link {
  text-align: right;
  color: yellow;
  background-color: red;
}

li {
  text-align: left;
  color: blue;
  background-color: lightblue;
}

.router-link-active {
  font-size: xx-large;
}

.router-link-exact-active {
  font-weight: bolder;
}
</style>