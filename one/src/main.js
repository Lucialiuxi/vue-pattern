import Vue from 'vue'
import App from './App.vue'
import "./baseComponentRegister"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
