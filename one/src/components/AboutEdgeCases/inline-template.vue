<template>
    <my-component inline-template>
        <div>
            <p>These are compiled as the component's own template.</p>
            <p>Not parent's transclusion content.</p>
        </div>
    </my-component>
</template>

<script>
// 内联模板
import Vue from 'vue';
const MyComponent = Vue.component("my-component",{
    name:"my-component"
})
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>

</style>