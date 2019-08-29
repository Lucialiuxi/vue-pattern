<template>
    <div>
        <ul class="PropsType">
            <li>{{title}}</li>
            <li>{{likes}}</li>
            <li>{{isPublished}}</li>
            <li>{{commentIds}}</li>
            <li>{{author}}</li>
        </ul>
        <br/>

        <ol>
            <li v-for="item in AObject" :key="item">{{item}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name:"PropsType",
        // props: ['title', 'likes', 'isPublished', 'commentIds', 'author'],
        props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            commentIds: Number,
            author: String,
            AObject: Object
        }
    }
</script>
