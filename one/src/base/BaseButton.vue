<template>
    <!-- <button :class="getPropsClass">{{title}}</button> -->
    <button :class="[className,'baseButton']">{{title}}</button>
</template>

<script>
export default {
    props:{
        className: {
            type: String,
            default:""
        },
        title: {
            type: String,
            default:""
        }
    },
    data(){
        return {
            buttonClass: true
        }
    },
    computed:{
        getPropsClass(){
            let btnClas = `${this.className} baseButton`
            return btnClas
        }
    }
}
</script>

<style scoped>
    .baseButton {
        height: 45px;
        line-height: 45px;
        /* border: none; */
        background-color: gold;
        color: brown;
        border-radius: 4px
    }
</style>