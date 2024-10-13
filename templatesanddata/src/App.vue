<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered table-scripted text-left">
      <tr>
        <th>Index</th>
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
        <tr v-for="(p, i) in products" v-bind:key="p.name" v-bind:odd="i % 2 == 0">
          <td> {{  i+ 1 }}</td>
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
export default {
  name: 'MyComponent',
  data: function () {
    return {
      products:[
        { name: "Kajak", price: 275},
        { name: "Kamizelka", price: 48.95},
        { name: "Piłka", price: 19.50},
        { name: "Kostka", price: 119.50},
        { name: "Kołek", price: 33.50},
        { name: "Pachołek", price: 99.99},
      ]
    }
  },
  computed:{
  },
  methods: {
    handleClick() {
      //this.products.push(this.products.shift());
      this.products = this.products.filter( p => p.price > 50 );
    }
  },
  filters: {
    currency(value){
      return new Intl.NumberFormat("pl-PL", {style: "currency", currency: "PLN"}).format(value);
    }
  }
}
</script>
<style>
#tagged {background-color: coral;}

[odd] {
  background-color: lightblue;
}
</style>