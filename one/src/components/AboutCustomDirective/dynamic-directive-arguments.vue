<template>
    <div class="dynamic-directive-arg">
        动态指令参数
        <div id="baseexample">
            <p>滚动至页面下方</p>
            <p v-pin:[direction]="200">
                让我从页面顶/左部开始画200px
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
Vue.directive('pin',{
    bind:function(el, binding, vnode){
        el.style.position="fixed";
        let s = (binding.arg === "left" ? "left" : "top");
        el.style[s]=binding.value+'px';
        el.style.color='green';
    }
});
export default {
    data(){
        return {
            direction:"left"
        }
    }
}
</script>

<style scoped>
    .dynamic-directive-arg {
        background-color: cadetblue;
        color: #fff;
        font-size: 28px;
        font-weight: bolder;
    }
</style>