<template>
    <button
        v-on:click="warn('just try')"
    >submit</button>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        warn: function(msg , event ) {
            if(event) event.preventDefault();
            alert(msg)
        }
    }
}
</script>