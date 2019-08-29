<template>
    <div class="PropsOneWayFlow">
        {{str}}---{{normalizeSize}}---{{size}}
    </div>
</template>

<script>
    export default {
        name: "PropsOneWayFlow",
        props:{
            normalString: String,
            size: String
        },
        data: function () {
            return {
                str: this.normalString
            }
        },
        computed:{
            normalizeSize:function () {
                return this.size.trim().toLowerCase()
            }
        }

    }
</script>
