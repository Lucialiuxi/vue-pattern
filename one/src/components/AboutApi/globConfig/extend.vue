<template>
    <div id="mount-point"></div>
</template>

<script>
import Vue from "vue";
let Profile = Vue.extend({
    template:`<p>{{firstName}}-{{lastName}} aka {{alias}}</p>`,
    data(){
        return {
            firstName: "walter",
            lastName: "white",
            alias: "heisenberg"
        }
    }
});

new Profile().$mount('#mount-point');

export default {
    
}
</script>

<style lang="scss" scoped>

</style>