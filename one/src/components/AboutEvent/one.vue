<template>
    <div class="one-event">
       <welcome-button v-on:welcome="sayHi"></welcome-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('welcome-button',{
        template:`
            <button v-on:click="$emit('welcome')">
                click me to be welcomed
            </button>
        `
    })
     export  default {
        name: "one-event",
        props:["foo"],
        components: {

        },
        methods:{
            sayHi:function (ev) {
                alert("hello")
            }
        }
    }
</script>

<style scoped>
    .one-event{
        background-color: #8adbff;
    }
</style>
