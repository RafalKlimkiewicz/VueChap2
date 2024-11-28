<template>
  <div class="m-2">
    <numbers />
    <substraction />
    <mathsComponent operation="Divide" firstVal="10" secondVal="20" />
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
