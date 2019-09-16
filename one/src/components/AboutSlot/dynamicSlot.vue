<template>
    <div class="dynamic-slot">
        <slot v-bind:wether="wether">
            {{wether.yesterday}}
        </slot>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            wether:{
                yesterday:'rain',
                today: 'sunny',
                tomorrow: 'windy'
            }
        }
    }
}
</script>