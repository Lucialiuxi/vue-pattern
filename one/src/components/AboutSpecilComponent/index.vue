<template>
    <div class="AboutSpeciaComponent">
        <Dynamic></Dynamic>
        <br/>
        <Dynamic1></Dynamic1>
    </div>
</template>

<script>
    import Dynamic from "./Dynamic";
    import Dynamic1 from "./Dynamic1"

    export default {
        name: "AboutSpeciaComponent",
        components:{
            Dynamic,
            Dynamic1
        }
    }
</script>

<style scoped>
    .AboutSpeciaComponent {
        border: 1px solid darkgoldenrod;
        font-size: 26px;
        font-weight: bold;
        padding: 20px;
    }
</style>
