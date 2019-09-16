<template>
    <span>
        <slot v-bind:name1="name1">
            {{ name1.firstname }}
        </slot>
    </span>
</template>

<script>
export default {
    name:'slot-eight',
    data:function(){
        return {
            name1:{
                firstname:'lucia',
                lastname:'liu'
            }
        }
    }
}
</script>