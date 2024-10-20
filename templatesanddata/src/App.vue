<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      Value: {{ dataValue }}
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="">
          <input class="form-check-input" type="checkbox" v-on:change="handleChange" />
          Data values
        </label>
      </div>
    </div>
    <div class="text-center m-2">
      <button class="btn btn-secondary" v-on:click="reset">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      dataValue: false
    }
  },
  methods: {
    reset() {
      this.dataValue = false;
    },
    handleChange($event) {
      this.dataValue = $event.target.checked;
    }
  }
}
</script>