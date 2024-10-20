<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Selected cities: {{ cities }}</div>
    </div>
    <div class="form-check m-2" v-for="city in cityNames" v-bind:key="city">
      <label class="form-check-label">
        <input v-model="cities" v-bind:value="city" type="checkbox" class="form-check-input" />
        {{ city }}
      </label>
    </div>
    <div class="text-center">
      <button v-on:click="reset" class="btn btn-info">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      cityNames: ["Łódź", "Radom", "Sosnowiec", "Warszawa"],
      cities: []
    }
  },
  methods: {
    reset() {
      this.cities = [];
    }
  }
}
</script>