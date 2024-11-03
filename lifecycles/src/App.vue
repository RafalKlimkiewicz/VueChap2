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
    <div class="text-white center my-2">
      <button class="btn btn-light" v-on:click="changeOrderNames">
        Change Order
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'App',
  data: function () {
    return {
      checked: true,
      names: [],
      val: 0,
    }
  },
  beforeCreate() {
    console.log(`beforeCreate(), value: ${this.checked}`);
  },
  created() {
    console.log(`created(), value: ${this.checked}`);
  },
  mounted() {
    this.$el.dataset.names.split(",").forEach(name => {
      this.names.push(name.trim());
    });
  },
  beforeUpdate() {
    console.log(`beforeUpdate() check: ${this.checked}  Name[0]: ${this.names[0]} el.getElementsByTagName: ${this.$el.getElementsByTagName("li").length}`);
  },
  updated() {
    console.log(`updated() check: ${this.checked}  Name[0]: ${this.names[0]} el.getElementsByTagName: ${this.$el.getElementsByTagName("li").length}`);
  },
  methods: {
    changeOrderNames() {
      this.checked = !this.checked;
      this.names.reverse();
      Vue.nextTick(() => console.log(`executed callback ${this.val++}`))
    }
  },
  watch: {
    // checked: function (newValue, oldValue) {
    //   console.log(`watcher: from ${oldValue} to ${newValue}`);
    // },
    checked: {
      handler: function (newValue, oldValue) {
        console.log(`watcher-immediate: from ${oldValue} to ${newValue}`);
      }, 
      //immediate: true, //after configuration watch, before create() and before beforeUpdate()  
      deep: true, //watch all properties inside, not only defined, before beforeUpdate()
    }

  }


}
</script>
