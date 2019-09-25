<template>
    <div class="renderFunction-jsx">
        渲染函数 & JSX
        <anchored-heading v-for="level in levelList" :key="level" :level="level">
            <p>{{level}}----55555</p>
        </anchored-heading>
    </div>
</template>

<script>
import Vue from 'vue';

Vue.component("anchored-heading",{
    name:"anchored-heading",
    render(createElement) {
        return createElement(
             'h' + this.level,
             this.$slots.default
        )
    },
    props:{
        level: {
            type: Number,
            required: true
        }
    }
})

 export default {
     data(){
         return {
             levelList:[1,2,3,4,5]
         }
     },
     created(){
        //  console.log("$data",this.$data.levelList)
     }
 }
</script>


<style scoped>
    .renderFunction-jsx{
        background-color: azure;
        color: violet;
    }
</style>