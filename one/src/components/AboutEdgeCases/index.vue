<template>
    <div class="components-edge-cases">
        边界处理

        <br/>
        <Access   ref="specialElement"/>

        <br/>
        <!-- 依赖注入 -->
        <DependencyInjection/>

        <br/>
        <!-- 依赖注入1 -->
        <DependencyInjectionOne/>

        <br/>
        <!-- 循环引用 -->
        <!-- <CircularReferences/> -->

        <br/>
        <!-- 内联模板 -->
        <InlineTemplateExample></InlineTemplateExample>

        <br/>
        <!-- 访问子组件 -->
        <a-button size="large" @click="getChildComponentEle">打印获取到的子组件元素</a-button>

        <br/>
        <a-button size="small" @click="makeInputFocus">点击按钮让输入框聚焦</a-button>
        <br/>

        <!-- <XTemplate></XTemplate> -->
        <a-button 
            type="primary" 
            ghost 
            @click="reFresh"
        >点击刷新强制页面</a-button>
    </div>
</template>

<script>
import Access from "./element-component-access"
import DependencyInjection from "./dependency-injection"
import DependencyInjectionOne from "./dependency-injection-one"
// import CircularReferences from "./circular-references"
import InlineTemplateExample from "./inline-template"
// import XTemplate from './x-template'

let s = Symbol();
export default {
    data:function(){
        return {
            a: "a",
            b: 1,
            c: 2,
        }
    },
    components:{
        Access,
        DependencyInjection,
        DependencyInjectionOne,
        // CircularReferences,
        InlineTemplateExample,
        // XTemplate
    },
    methods: {
        getChildComponentEle(){
            console.log(this.$refs.specialElement)
        },
        makeInputFocus(){
            this.$refs.specialElement.focus()
        },
        sum(){
            return this.c + this.b
        },
        reFresh(){
            this.$forceUpdate();
        }
    },
    // 依赖注入
    provide:function(){
        return {
            sum: this.sum,
            s: "foo",
            name: 'lucia',
            foo:'不知道 foo是个啥',
            aaaFrom:'注入子组件的aaa的来源属性',
            aaaDefault:'注入子组件的aaa的默认属性'
        }
    }
}
</script>

<style scoped>
    .components-edge-cases {
        background-color: antiquewhite;
        color: chartreuse;
        padding: 20px;
        font-weight: bolder;
        font-size: 28px;
    }
</style>