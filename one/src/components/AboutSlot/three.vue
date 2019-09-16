<template>
    <span class="slot-three">
        <slot v-bind:user="user">{{user.lastName}}</slot>
    </span>
</template>

<script>
//作用域插槽
    export default {
        name:"SlotThree" ,
        data:function () {
            return {
                user:{
                    lastName: 'Mu',
                    firstName: 'xin',
                    nikename: 'xixi'
                }
            }
        },
    }
</script>
