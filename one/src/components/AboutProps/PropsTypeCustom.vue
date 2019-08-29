<template>
    <div class="PropsTypeCustom">
        {{author.firstName}}---{{author.lastName}}
    </div>
</template>

<script>


    export default {
        name: "PropsTypeCustom",
        props: {
            author: Object
        }
    }
</script>
