import Vue from 'vue'
import Antd from 'ant-design-vue'
import VueRouter from "vue-router"
import App from './App.vue'
import "./baseComponentRegister"
import 'ant-design-vue/dist/antd.css'
import mixins from "./mixins"
import Routes from "./routes"

//阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

//自定义选项合并策略
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  console.log(toVal, fromVal)
  // 返回合并后的值
}
let strategies = Vue.config.optionMergeStrategies
strategies.myTest = strategies.methods

//全局过滤器
Vue.filter('transferToUpperCase',function(value){
    if(!value) return;
    return value.toUpperCase();
})
Vue.use(Antd);
Vue.mixin(mixins);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes
})
new Vue({
  router,
  myOption: '全局混入测试',
  data:{
    foo: 1,
  },
  computed:{
    bar(){
      return this.foo +18;
    }
  },
  methods: {
    baz(){
      alert(this.foo)
    }
  },
  render: h => h(App),
}).$mount('#app')
