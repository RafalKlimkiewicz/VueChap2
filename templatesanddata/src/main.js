import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import ChildGlobalComponent from "./components/ChildComponent.vue"

Vue.config.productionTip = false

Vue.component("child-global-component", ChildGlobalComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
