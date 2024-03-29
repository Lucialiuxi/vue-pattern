import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import _ from 'lodash';
import { simpleStore } from './store/simple';

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Basic from './components/Basic.vue';
import ComputedProperty from './components/ComputedProperty.vue';
import WatchExample from './components/WatchExample.vue';
import ClassAndStyle from './components/ClassAndStyle.vue';
import ListRender from './components/ListRender.vue';
import EventExample from './components/EventExample.vue';
import EventDefault from './components/events/EventDefault';
import EventOne from './components/events/EventOne';
import EventTwo from './components/events/EventTwo';
import EventKey from './components/events/EventKey';

import FormInsert from './components//FormInsert.vue';
import BasicUse from './components/formInsert/BasicUse';
import ValueBind from './components/formInsert/ValueBind';

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
  {
      path: '/basic-event',
      component: EventExample,
      children: [
        {
          path: '',
          component: EventDefault,
        },
        {
        path: 'one',
        component: EventOne,
        },
        {
        path: 'two',
        component: EventTwo,
        },
        {
        path: 'key',
        component: EventKey,
        }
      ]
  },
  {
    path: '/form-insert',
    component: FormInsert,
    children: [
      {
        path: 'basic',
        component: BasicUse,
      },
      {
        path: 'bind-value',
        component: ValueBind,
      },
    ],
  },
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
app.use(simpleStore);

app.mount('#app');
