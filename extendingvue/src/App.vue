<template>
  <div class="m-2">
    <numbers />
    <substraction />
    
  </div>
</template>

<script>
import Numbers from "./components/NumbersDisplay.vue";
import Substraction from "./components/SubstractionDisplay.vue";

export default {
  name: 'App',
  components: {
    Numbers,
    Substraction
  }
}
</script>
