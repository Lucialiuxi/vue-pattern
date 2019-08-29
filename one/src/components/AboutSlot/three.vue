<template>
    <span class="slot-three">
        <slot v-bind:user="user">{{user.lastName}}</slot>
    </span>
</template>

<script>
    export default {
        name:"SlotThree" ,
        data:function () {
            return {
                user:{
                    lastName: 'Mu',
                    firstName: 'xin'
                }
            }
        },
    }
</script>
