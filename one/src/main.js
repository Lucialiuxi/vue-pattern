import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import "./baseComponentRegister"
import 'ant-design-vue/dist/antd.css'
import mixins from "./mixins"

//阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

//自定义选项合并策略
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  console.log(toVal, fromVal)
  // 返回合并后的值
}
let strategies = Vue.config.optionMergeStrategies
strategies.myTest = strategies.methods

Vue.use(Antd);
Vue.mixin(mixins);
new Vue({
  myOption: '全局混入测试',
  data:{
    foo: 1,
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
