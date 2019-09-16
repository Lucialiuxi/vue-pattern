<template>
  <div id="app">
      <div v-if="false">
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          <AboutSlot/>
          <AboutEventEntry/>
          <AboutProps/>
          <AboutApi/>
      </div>
      <AboutSpecialComponent/>
  </div>
</template>

<script>

    import HelloWorld from './components/HelloWorld.vue';
    import AboutEventEntry from "./components/AboutEvent/index";
    import AboutSlot from "./components/AboutSlot";
    import AboutProps from "./components/AboutProps";
    import AboutSpecialComponent from "./components/AboutSpecilComponent"
    import AboutApi from "./components/AboutApi"


    export default {
      name: 'app',
      components: {
          HelloWorld,
          AboutEventEntry,
          AboutSlot,
          AboutProps,
          AboutSpecialComponent,
          AboutApi
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
