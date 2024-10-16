<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered table-scripted text-left">
      <tr>
        <th>Index</th>
        <th>Key</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        <!-- <template v-for="(p, i) in products">
          <tr v-bind:key="p.name" v-bind:odd="i % 2 == 0">
            <td> {{  i+ 1 }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.price | currency }}</td>
          </tr>
        </template> -->
        <tr v-for="(p, key, i) in products" v-bind:key="p.name">
          <td> {{ i + 1 }}</td>
          <td> {{ key }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </tbody>

    </table>
    <button v-on:click="handleClick" class="btn btn-primary">
      Press mee
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'MyComponent',
  data: function () {
    return {
      products: {
        "Kajak": { name: "Kajak", price: 275 },
        22: { name: "Kamizelka", price: 48.95 },
        3: { name: "Piłka", price: 19.50 },
        "4": { name: "Kostka", price: 119.50 },
      }
    }
  },
  computed: {
  },
  methods: {
    handleClick() {
      //this.products.push(this.products.shift());
      //this.products = this.products.filter( p => p.price > 50 );

      //this.products[1] = { name: "New item", price: 100}; //without change
      Vue.set(this.products, 5, { name: "New item - Vue set", price: 100 })

    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(value);
    }
  }
}
</script>
<style>
#tagged {
  background-color: coral;
}

[odd] {
  background-color: lightblue;
}
</style>