<template>
    <div class="Dynamic3">
        Dynamic3
        <async-example></async-example>
        <async-webpack-example></async-webpack-example>
        <AsyncComponent/>
        <LoadingComponent/>
    </div>
</template>

<script>
    import Vue from "vue";
    import LoadingComponent from "./LoadingComponent"
    Vue.component('async-example', function (resolve, reject) {
        setTimeout(function () {
            // 向 `resolve` 回调传递组件定义
            resolve({
            template: '<div>I am async!</div>'
            })
        }, 1000)
    });
    Vue.component('async-webpack-example', () => import('./my-async-component'));
    const AsyncComponent = () => ({
        // 需要加载的组件 (应该是一个 `Promise` 对象)
        component: import('./my-async-component.vue'),
        // 异步组件加载时使用的组件
        loading: LoadingComponent,
        // // 加载失败时使用的组件
        // error: ErrorComponent,
        // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        delay: 5000,
        // 如果提供了超时时间且组件加载也超时了，
        // 则使用加载失败时使用的组件。默认值是：`Infinity`
        timeout: 3000
    })
    export default {
        name: "Dynamic3",
        components:{
            AsyncComponent,
            LoadingComponent
        }
    }
</script>

<style>
    .Dynamic3 {
        background-color: deeppink;
        color: #ffffff;
        padding: 50px;
    }
</style>
