import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';
import App from './App.vue';
import ComponentBasic from './components/ComponentBasic.vue';
import HelloWorld from './components/HelloWorld.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/component-basic', component: ComponentBasic },
];

const router = new VueRouter({
  routes,
});

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>',
});

Vue.component('blog-post-btn', {
  props: ['post', 'prop'],
  template: `
  <div class="blog-post">
    <li v-for="(item, i) in prop" :key="i">{{item}}</li>
    <h3>{{ post.title }}</h3>
    <button @click="$emit('enlarge-text', 0.1)">点击放大title的字号</button>
    <div v-html="post.content"></div>
    <slot></slot>
  </div>
  `,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
