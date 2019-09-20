<template>
    <div class="hook-function">
        钩子函数
        <div 
            id="hook-arguments-example"
            v-demo:foo.a.b="message"
        ></div>
    </div>
</template>

<script>
/**
 * 一个指令定义对象可以提供如下几个钩子函数
 * bind:只调用一次，指令第一次绑定到元素时调用。可以在这里进行一次初始化设置；
 * inserted：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定被插入文档中）；
 * update:所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。指令的值可能发生了改变，也可能没有。
 * componentUpdated:指令所在组件的VNode及其子VNode全部更新后调用；
 * unbind:只调用一次，指令与元素解绑时调用。
 */

 import Vue from 'vue';
 Vue.directive('demo',{
     bind:function(el, binding, vnode){
         el.innerHTML = 
         'name:'+ JSON.stringify(binding.name)+'<br/>'+
         'value:'+ JSON.stringify(binding.value)+'<br/>'+
         'oldValue:'+ JSON.stringify(binding.oldValue)+'<br/>'+
         'expression:'+ JSON.stringify(binding.expression)+'<br/>'+
         'arg:'+ JSON.stringify(binding.arg)+'<br/>'+
         'modifiers:'+ JSON.stringify(binding.modifiers)+'<br/>'+
         '<div class="vnode-keys">vnode keys:<br/>'+ Object.keys(vnode).join('<br/>')+'</div>'
     }
 })
export default {
    data(){
        return {
            message:"自定义指令的value"
        }
    }
}
</script>

<style scoped>

</style>