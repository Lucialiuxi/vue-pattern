<template>
    <div @click="wrapClick">
        <h3>事件修饰符</h3>
        <!-- 阻止单击事件冒泡 -->
        <a @click.stop="doThis" href="https://www.baidu.com/">baidu</a>
        <br/>
        <!-- 阻止单击事件 冒泡和 默认行为 -->
        <a @click.stop.prevent="doThis" href="https://www.baidu.com/">baidu</a>

        <form @submit="onSubmit">
            <button type="submit">提交事件重载页面</button>
        </form>
        <form @submit.prevent="onSubmit">
             <button type="submit">提交事件【不再】重载页面</button>
        </form>
        <form @submit.prevent>
             <button type="submit">提交事件【不再】重载页面</button>
        </form>

        <div @click="buttonWrapHandle">
            <!-- once 点击事件只会触发一次 -->
            <button @click.once="buttonClick('确定1-- once')">确定1-- once''</button>
        </div>

        <!-- 添加事件监听时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件再次先处理，然后才交给内部元素进行处理 -->
        <div @click.capture="buttonWrapHandle" class="button-wrap">
            <button @click="buttonClick('确定2')">确定2</button>
        </div>

        <!-- .self 点击 确定3 不触发buttonWrapHandle -->
        <div @click.self="buttonWrapHandle" class="button-wrap">
            <button @click="buttonClick('确定3')">确定3</button>
        </div>

        <!-- 滚动事件的默认行为（即滚动行为）将会立即触发 -->
        <!-- 而不会等待 onScroll 完成 -->
        <!-- 这其中包含event.preventDefault的情况 -->
        <div> </div>
    </div>
</template>

<script>
export default {
    methods: {
        doThis() {
            console.log('单击事件不冒泡')
        },
        wrapClick() {
            console.log('EventTwo组件中的顶层标签')
        },
        onSubmit() {
            console.log('提交')
        },
        buttonWrapHandle() {
            console.log('button的父元素');
        },
        buttonClick(message) {
            console.log(message + 'button自己');
        },
    }
}
</script>

<style scoped>
    .button-wrap {
        padding: 30px;
        background-color: cadetblue;
        margin-bottom: 10px;
    }
    button {
        min-width: 80px;
        line-height: 24px;
        margin: 10px;
    }
</style>