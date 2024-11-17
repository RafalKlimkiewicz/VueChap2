<template>
  <div class="container-fluid">
    <!-- <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group btn-group-toggle">
          <label class="btn btn-info" v-bind:class="{ active: (selected == 'table') }">
            <input type="radio" v-model="selected" value="table" />
            Table
          </label>
          <label class="btn btn-info" v-bind:class="{ active: (selected == 'editor') }">
            <input type="radio" v-model="selected" value="editor" />
            Editor
          </label>
        </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col">
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue';
import ProductEditor from './components/ProductEditor.vue';
import ErrorDisplay from './components/ErrorDisplay.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    ProductDisplay,
    ProductEditor,
    ErrorDisplay
  },
  created() {
    this.$store.dispatch("getProductsAction");
  },
  // data: function () {
  //   return {
  //     selected: "table"
  //   }
  // },
  computed: {
    ...mapState({
      selected: state => state.nav.selected
    }),
    selectedComponent() {
      console.log(`selectedComponent: ${this.selected}`);
      return this.selected == "table" ? ProductDisplay : ProductEditor;
    }
  }
}
</script>