<template>
    <div>
        自定义合并策略
        <!-- {{aaa}} -->
        <button @keyup.space="close">测试keycode</button>
        <ul>
           <li><a href="#miao">去找喵星人</a></li> 
           <li><a href="#wang">去找汪星人</a></li> 
           <li><a href="#meng">去找萌萌哒</a></li> 
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';

//取消vue所有的日志与警告
// Vue.config.silent = true;

//自定义合并策略
Vue.config.optionMergeStrategies._my_option=function(parent, child, vm){
    // console.log("parent",parent)
    // console.log("child",child)
    // console.log("vm",vm)
    return child +1
}
//errorHander??????????
Vue.config.errorHander = function(err, vm, info){
  console.log("errorHander--info",info)
  console.error(err)
}

//为vue运行时警告赋予一个自定义处理函数
Vue.config.warnHandler = function(msg, vm, trace){
    //trace是组件的集成关系追踪
    console.log("warnHandler---msg", msg)
    console.log( "warnHandler---vm", vm)
    console.log("warnHandler---trace",trace)
};

//keyCode 给v-on自定义键位别名
Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    space:32,
    up:[38,87] //向上箭头，w子母键
}


//检查代码
Vue.config.devtools = true;

const Profile = Vue.extend({
    _my_option: 1
});

export default {
    data(){
        return {
           
        }
    },
    created(){
        console.log("_my_option",Profile.options._my_option)
    },
    methods:{
        close(){
            alert('播放音乐');
        }
    }
}
</script>

<style scoped>

</style>