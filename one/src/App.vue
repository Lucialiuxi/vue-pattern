<template>
  <div id="app">
      <div v-if="false">
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          <AboutSlot/>
          <AboutEventEntry/>
          <AboutProps/>
          <AboutSpecialComponent/>
          <AboutEdgeCases/>
          <AboutTransitionAndAnimation/>
          <AboutCustomDirective/>
      </div>
          <AboutApi/>
  </div>
</template>

<script>

    import HelloWorld from './components/HelloWorld.vue';
    import AboutEventEntry from "./components/AboutEvent/index";
    import AboutSlot from "./components/AboutSlot";
    import AboutProps from "./components/AboutProps";
    import AboutSpecialComponent from "./components/AboutSpecilComponent";
    import AboutApi from "./components/AboutApi";
    import AboutEdgeCases from "./components/AboutEdgeCases";
    // 过渡 & 动画
    import AboutTransitionAndAnimation from './components/AboutTransitionAndAnimation'
    //自定义指令
    import AboutCustomDirective from './components/AboutCustomDirective'


    export default {
      name: 'app',
      components: {
          HelloWorld,
          AboutEventEntry,
          AboutSlot,
          AboutProps,
          AboutSpecialComponent,
          AboutApi,
          AboutEdgeCases,
          AboutTransitionAndAnimation,
          AboutCustomDirective
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
  /* margin-top: 60px; */
  height: 700px;
}
</style>
