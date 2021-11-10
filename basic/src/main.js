import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import _ from 'lodash';

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Basic from './components/Basic.vue';
import ComputedProperty from './components/ComputedProperty.vue';
import WatchExample from './components/WatchExample.vue';
import ClassAndStyle from './components/ClassAndStyle.vue';
import ListRender from './components/ListRender.vue';

const routes = [
  { path: '/', component: {
      template: `<div>首页</div>`
  } },
  { path: '/hello', component: HelloWorld },
  { path: '/basic', component: Basic },
  { path: '/computed', component: ComputedProperty },
  { path: '/watch', component: WatchExample },
  { path: '/classAndStyle', component: ClassAndStyle },
  { path: '/v-for', component: ListRender },
];

// 创建路由示例并传递 routes 配置
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);

app.component('save-button', {
  created() {
    // 用 Lodash 的防抖函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      console.log('响应点击')
    }
  },
  template: `
    <button @click="debouncedClick">
      保存
    </button>
  `
});

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text || todo }}</li>`
});


app.use(router);

app.mount('#app');
