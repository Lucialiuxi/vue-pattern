<template>
    <div>
        <div class="wrap">
            <blog-post
                v-for="item in posts" 
                :key="item.id" 
                :title="item.title"
            ></blog-post>
        </div>
        <div class="wrap" :style="{fontSize: postFontSize + 'em'}">
            <blog-post-btn
                v-for="item in posts"
                :key="item.id"
                :post="item" 
                @enlarge-text="onEnlargeText"
                :prop="someThing"
            ><span>这是slot的内容</span></blog-post-btn>
        </div>
        <div class="wrap"  view-box="view">
            <img :src="src" alt="vue logo" :style="{ height: '40px'}"/>
        </div>
        <div class="wrap" :text-content.prop="text" :view-box.camel="viewBox">
           123
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            src: 'https://cn.vuejs.org/images/logo.svg',
            text: 'text',
            viewBox: 'viewBox',
            postFontSize: 1,
            posts: [
                { id: 1, title: 'my journey with vue', content: '<em>我是em标签</em>' },
                { id: 2, title: 'blogging with vue', content: '<h3>我是h3标签</h3>'  },
            ],
            someThing: {
                a: 1,
                b: 2,
            },
        }
    },
    methods: {
        onEnlargeText(enlargeAmount) {
            this.postFontSize+=enlargeAmount;
        },
    }
}
</script>

<style>
    div.wrap {
        padding: 10px;
    }
</style>