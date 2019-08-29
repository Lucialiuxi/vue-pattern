<template>
    <div class="form-control-wrap">
        <label class="label-for-date">{{title}}</label>
        <input
                type="text"
                class="form-control"
                v-bind="$attrs"
                v-bind:value="value"
                v-on:input="$emit('input',$event.target.value)"
        />

    </div>
</template>

<script>
    export default {
        name:"PropsNoAttributes",
        inheritAttrs: false,
        props:{
            title: String,


        },
        data: function () {
            return {
                value: 'props value',
            }
        }
    }
</script>

<style scoped>
   .form-control {
       width: 120px;
       height: 40px;
       outline: none;
       border-radius: 4px;
       border: 1px solid blue;
   }
</style>
