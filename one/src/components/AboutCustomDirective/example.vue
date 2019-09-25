<template>
    <div>
        简单指令：
        <br/>
        <input placeholder="存在只是为了测试下一个输入框的聚焦"/>
        <br/>
        <input v-focus :placeholder="p"/>
    </div>
</template>

<script>
// import Vue from 'vue'
//全局注册
// Vue.directive('focus',{
//     //当绑定的元素插入到dom中时
//     inserted: function(el){
//         //聚焦元素
//         el.focus()
//     }
// })

export default {
    data(){
        return {
            p: "请输入您的名字"
        }
    },
    //局部注册指令
    directives:{
        focus: {
            inserted: function(el){
                el.focus()
            }
        }
    }
}
</script>
<style scoped>

</style>