<template>
    <div id="event-with-method" @click="clickWrap">

        <button @click="greet">Greet</button>
        <span>{{ greetingWords }}</span>

        <button @click="say('hi')">say hi</button>
        <button @click="say('what')">say what</button>

        <button @click="warn('Form cannot be submitted yet.', $event)">submit</button>

        <button @click="a($event), b($event)">点击同时执行2个事件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Vue.js',
            greetingWords: '...',
        }
    },
    methods: {
        greet(event) {
            this.greetingWords = 'hello ' + this.name + '!';
            if (event) {
                console.log('该元素标签是', event.target.tagName)
            }
        },
        say(message) {
            alert(message);
        },
        warn(message, event) {
            if (event) {
                event.preventDefault(); //阻止默认行为: a 标签跳转；button的type是submit的提交导致刷新；checkbox的选中切换；a标签点击跳转
                event.stopPropagation(); //阻止冒泡 加这一句 clickWrap不执行了
            }
            alert(message);
        },
        clickWrap() {
            console.log(123)
        },
        a(event) {
            console.log(event,'第一个事件处理器逻辑...')
        },
        b(event) {
            console.log(event,'第二个事件处理器逻辑...')
        }
    }
}
</script>

<style scoped>
    button {
        margin: 10px;
    }
</style>