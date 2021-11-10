<template>
  <div id="app">
    <nav>
      <p>
        <router-link to="/">首页</router-link>
      </p>
      <p>
        <router-link to="/hello">欢迎</router-link>
      </p>
      <p>
        <router-link to="/basic">基础</router-link>
      </p>
      <p>
        <router-link to="/computed">计算属性</router-link>
      </p>
      <p>
        <router-link to="/watch">侦听器</router-link>
      </p>
      <p>
        <router-link to="/classAndStyle">class和Style绑定</router-link>
      </p>
      <p>
        <router-link to="/v-for">列表渲染</router-link>
      </p>
      <p>
        <router-link to="/basic-event">事件处理和vuex</router-link>
      </p>
    </nav>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav p {
  display: inline-block;
  min-width: 100px;
  line-height: 20px;
  color: blue;
  font-weight: bold;
}
</style>
