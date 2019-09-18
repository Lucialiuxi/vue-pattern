<template>
    <div class="x-template">
        <hello-world></hello-world>
    </div>
</template>
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>

<script>
import Vue from 'vue'
Vue.component('hello-world', {
  template: '#hello-world-template'
})
export default {
    data(){
        return {
            a:1,
            b:2,
        }
    }
}
</script>

<style scoped>
    .x-template {
        border: 2px solid salmon;
    }
</style>