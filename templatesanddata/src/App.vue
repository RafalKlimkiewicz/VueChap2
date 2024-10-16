<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered table-scripted text-left">
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        <tr v-for="p in pageItems" v-bind:key="p.name">
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </tbody>

    </table>
    <div class="text-center">
      <button class="btn btn-secondary m-1" v-on:click="toggleSort" v-bind:class="{ 'bg-primary': sort }">Enable
        sorting</button>
      <button class="btn btn-secondary m-1" v-on:click="toggleFilter" v-bind:class="{ 'bg-primary': filter }">Enable
        filtering</button>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <button v-for="i in pageCount" v-on:click="selectPage(i)" class="btn btn-secondary m-1"
        v-bind:class="{ 'bg-primary': currentPage == i }">
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      pageSize: 3,
      currentPage: 1,
      filter: false,
      sort: false,
      products: [
        { name: "Kajak", price: 275 },
        { name: "Kamizelka", price: 48.95 },
        { name: "Piłka", price: 19.50 },
        { name: "Kostka", price: 119.50 },
        { name: "a", price: 321.50 },
        { name: "b", price: 55.50 },
        { name: "c", price: 1.50 },
        { name: "d", price: 1111.50 },
        { name: "e", price: 11119.50 },
        { name: "f", price: 222.50 },
        { name: "g", price: 333.50 },
        { name: "h", price: 11449.50 }
      ]
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.dataItems.length / this.pageSize);
    },
    pageItems() {
      let start = (this.currentPage - 1) * this.pageSize;
      return this.dataItems.slice(start, start + this.pageSize);
    },
    dataItems() {
      let data = this.filter ? this.products.filter(p => p.price > 400) : this.products;

      return this.sort ? data.concat().sort((p1, p2) => p2.price - p1.price) : data;
    }
  },
  methods: {
    selectPage(page) {
      this.currentPage = page;
    },
    toggleFilter() {
      this.filter = !this.filter;
      this.currentPage = 1;
    },
    toggleSort() {
      this.sort = !this.sort;
      this.currentPage = 1;
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