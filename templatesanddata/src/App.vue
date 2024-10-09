<template>
  <div class="bg-primary text-white text-center m-2 p-3">
    <h3>Product: {{ name | reverse | capitalize }}</h3>
    <h3>Product: {{ name | capitalize | reverse }}</h3>
    <h3>Price: {{ getTotalPrice(lowTaxRate) | currency(3) }}</h3>
    <h3>Price: {{ getTotalPrice(highTaxRate) | currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "kama ratunkowa",
      price: 300,
      lowTaxRate: 12,
      highTaxRate: 20
    }
  },
  computed: {
    lowTotalPrice: function () {
      return this.getTotalPrice(this.lowTaxRate);
    },
    highTotalPrice: function () {
      return this.getTotalPrice(this.highTaxRate);
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + (this.price * (taxRate / 100));
    }
  },
  filters: {
    currency(value, places) {
      return new Intl.NumberFormat("pl-PL", { 
        style: "currency", 
        currency: "PLN", 
        minimumFractionDigits: places || 2,
        maximumFractionDigits: places || 2
      }).format(value);
    },
    capitalize(value){
      return value[0].toUpperCase() + value.slice(1);
    },
    reverse(value){
      return value.split("").reverse().join("");
    }
  }
}
</script>