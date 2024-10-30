<template>
  <div class="bg-primary text-white m-2 p-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="checked" />
      <label>Checkbox field</label>
    </div>
    State of selection: {{ checked }}
    <div class="bg-info p-2">
      Names:
      <ul>
        <li v-for="name in names" v-bind:key="name">
          {{ name }}
        </li>
      </ul>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      checked: true,
      names: []
    }
  },
  beforeCreate() {
    console.log(`beforeCreate(), value: ${this.checked}`);
  },
  created() {
    console.log(`create(), value: ${this.checked}`);
  }
}
</script>
