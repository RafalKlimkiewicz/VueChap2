<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    <product-display v-bind:product="product">
      <div slot-scope="data" class="bg-info text-left">
        {{ data.propname }} has value {{  data.propvalue }}
      </div>
    </product-display>
    <h6>{{ message }}</h6>
    <my-feature v-bind:initial-product="product" v-on:productSubmit="updateProduct" >
      <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">
        Edit product
      </div>
      <div slot="footer" class="bg-warning p-2 h3 text-dark">
        Check form before send
      </div>
    </my-feature>
  </div>
</template>

<script>
import ChildComponenet from "./components/ChildComponent";
import ProductDisplay from "./components/ProductDisplay.vue";
export default {
  name: 'App',
  components: {
    MyFeature: ChildComponenet,
    ProductDisplay
  },
  data: function () {
    return {
      message: "This is parent",
      product: {
        name: "Kajak",
        category: "Water sports",
        price: 275,
      }
    }
  },
  methods:{
    updateProduct(newProduct){
      this.message = JSON.stringify(newProduct);
    }
  }
}
</script>