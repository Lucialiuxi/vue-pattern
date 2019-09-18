<template>
    <div class="element-component-access">
        <a-button type="primary" @click="getFoo">点击按钮打印foo</a-button>
        <br/>
        <a-button type="danger" ghost @click="setFoo">将foo的值改为5</a-button>
        <br/>
        <a-button size="large" @click="setFoo1">将foo的值改为10</a-button>
        <br/>
        <a-button size="large" @click="()=>this.$root.baz()">弹框显示foo的值</a-button>
        <br/>
        <input type="text" ref="input" placeholder="请输入..."/>
    </div>
</template>

<script>
export default {
    data: function(){
        return {

        }
    },
    methods:{
        getFoo(){
            // 获取根组件的数据
            console.log(this.$root.foo)
            //获取父组件的数据
            console.log(this.$parent.a)
        },
        setFoo(){
            //写入根组件的数据
            this.$root.foo = 5;
        },
        setFoo1(){
            //写入根组件的数据
            this.$root.bar;
        },
        focus(){
            this.$refs.input.focus()
        }
    }
}
</script>

<style scoped>
    .special-ele {
        color: red !important;
    }
</style>