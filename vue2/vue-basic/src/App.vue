<template>
  <div id="app">
    <nav class="page-nav">
      <router-link to="/hello">hello</router-link>
      <router-link to="/component-basic">组件基础</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import vue from 'vue';
export default {
  name: 'App',
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
.page-nav a {
  display: inline-block;
  margin: 10px;
}
</style>
