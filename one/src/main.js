import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import "./baseComponentRegister"
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  data:{
    foo: 1
  },
  computed:{
    bar(){
      this.foo = 10;
    }
  },
  methods: {
    baz(){
      alert(this.foo)
    }
  },
  render: h => h(App),
}).$mount('#app')
