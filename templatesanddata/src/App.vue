<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div> Value: {{ dataValue }}</div>
      <div> Other Value: {{ otherValue }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input v-model="dataValue" class="form-check-input" type="checkbox" />
          Data values
        </label>
      </div>
    </div>
    <div class="bg-primary m-2 p-2">
      <input v-model="otherValue" type="text" class="form-control" />
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
      dataValue: false,
      otherValue: "",
    }
  },
  methods: {
    reset() {
      this.dataValue = false;
      this.otherValue = "";
    },
    // handleChange($event) {
    //   if ($event.target.type == "checkbox") {
    //     this.dataValue = $event.target.checked;
    //   } else {
    //     this.otherValue = $event.target.value;
    //   }
    // }
  }
}
</script>