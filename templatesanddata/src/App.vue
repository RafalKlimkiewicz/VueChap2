<template>
  <div class="container-fluid">
    <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click="handleClick">
      Outer element
      <div id="middle-element" class="bg-secondary p-4" v-on:click="handleClick">
        Element middle
        <div id="inner-element" class="bg-info p-4" v-on:click="handleClick">
          Innet elementr
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      buttonEvents: {
        click: this.handleClick,
        mousemove: this.handleMouseEvent,
        mouseleave: this.handleMouseEvent,

      },
      message: "Ready",
      names: ["Kajak", "Lifejet", "Foot ball", "Stadium"]
    }
  },
  methods: {
    handleClick($event) {
      console.log(`handleClick target: ${$event.target.id} +  currentTarget:  ${$event.currentTarget.id}`);
    }
  }
}
</script>