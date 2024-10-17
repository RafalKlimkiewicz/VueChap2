<template>
  <div class="container-fluid">
    <h3 class="bg-primary text-white text-center mt-2 p-2">{{ message }}</h3>
    <table class="table table-sm tabel-striped table-bordered">
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tr v-for="(name, index) in names" v-bind:key="name">
        <td>{{ index }}</td>
        <td>{{ name }}</td>
        <td>
          <button class="btn btn-sm bg-primary text-white" v-on:click="handleClick(name)"
            v-on:mousemove="handleMouseEvent(name, $event)"
            v-on:mouseleave="handleMouseEvent(name, $event)">Select</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      buttonEvents:{
        click: this.handleClick,
        mousemove: this.handleMouseEvent,
        mouseleave: this.handleMouseEvent,

      },
      message: "Ready",
      names: ["Kajak", "Lifejet", "Foot ball", "Stadium"]
    }
  },
  methods: {
    handleClick(name) {
      this.message = `Select: ${name}`;
    },
    handleMouseEvent(name, $event) {
      if ($event.type == "mousemove") {
        this.message = `Ruch w ${name} ${this.counter++}`;
      }else{
        this.counter = 0;
        this.message = "Ready!";
      }
    }
  }
}
</script>