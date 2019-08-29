<template>
  <div id="app">
      <div v-if="false">
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          <AboutEventEntry/>
      </div>
    <AboutSlot/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import AboutEventEntry from "./components/AboutEvent/index"
import AboutSlot from "./components/AboutSlot"

export default {
  name: 'app',
  components: {
    HelloWorld,
    AboutEventEntry,
    AboutSlot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
