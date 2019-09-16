<template>
    <ul class="yibuzujian">
        <li
            v-for="val in list"
            :key="val"
        >{{val}}</li>
    </ul>
</template>

<script>
export default {
    data: function(){
        return {
            list: [
                '异步组件',
                'require的文件',
                '测试',
            ]
        }
    }
}
</script>

<style scoped>
    .yibuzujian {
        background-color: #fff;
        color: lightblue;
    }
</style>