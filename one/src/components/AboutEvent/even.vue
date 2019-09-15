<template>
    <div class="changeFontSize">
        <div :style="{fontSize: fontSize+'px'}"></div>
        <blog-post
            v-for="post in posts"
            :key="post.id"
            :post="post"
            v-on:enlarge-text="fontSize+=1"
        ></blog-post>
        <BaseButton :title="buttonText" :className="adb"/>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('blog-post',{
    props: ["post"],
    template:`
    <div class="blog-post">
        <h3>{{post.title}}</h3>
        <button
            v-on:click="$emit('enlarge-text')"
        >enlarge text</button>
        <div v-html="post.content"></div>
    </div>
    `
})
export default {
    data(){
        return {
            fontSize: 24,
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            buttonText:'测试全局注册成功与否',
            adb:"adb"
        }
    }
}
</script>

<style scoped>
    .adb {
        border: 3px solid salmon;
    }
</style>