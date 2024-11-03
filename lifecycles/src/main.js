import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.config.errorHandler = function (error, component, source){
  console.log(`Global function to handle errors: ${error}, ${component}, ${source}`)
}

new Vue({
  el: '#app',
  render: (h) => h(App, { attrs: { 'data-names': 'Janek,Alicja,Piotrek,Daria' } })
});