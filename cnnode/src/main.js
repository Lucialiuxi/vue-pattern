// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false

//引入vuex的容器
import store from '@/store/storeFile'

//引入axios文件
import axios from 'axios'
Vue.use(axios)
Vue.use(iview)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
