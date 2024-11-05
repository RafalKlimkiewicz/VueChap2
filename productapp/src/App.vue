<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"><error-display /></div>
    </div>
    <div class="row">
      <div class="col-8 m-3"><product-display></product-display></div>
      <div class="col"><product-editor></product-editor></div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue';
import ProductEditor from './components/ProductEditor.vue';
import ErrorDisplay from './components/ErrorDisplay.vue';

export default {
  name: 'App',
  components: { ProductDisplay, ProductEditor, ErrorDisplay },
}
</script>