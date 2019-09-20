<template>
    <div class="object-literal">
        对象字面量
        <br/>
        <div v-litertal='{color:"red",text:"hello"}'></div>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('litertal',function (el, binding) {
    el.style.color = binding.value.color;
    el.style.backgroundColor = "yellow";
    el.innerText = binding.value.text;
})
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>

</style>