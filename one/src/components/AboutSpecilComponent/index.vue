<template>
    <div class="AboutSpeciaComponent">
        <Dynamic></Dynamic>
        <br/>
        <Dynamic1></Dynamic1>
        <br/>
        <Dynamic3></Dynamic3>
        <br/>
        <KeepAlive></KeepAlive>
    </div>
</template>

<script>
    import Dynamic from "./Dynamic";
    import Dynamic1 from "./Dynamic1"
    import Dynamic3 from "./Dynamic3";
    import KeepAlive from "./KeepAlive";

    export default {
        name: "AboutSpeciaComponent",
        components:{
            Dynamic,
            Dynamic1,
            Dynamic3,
            KeepAlive
        }
    }
</script>

<style scoped>
    .AboutSpeciaComponent {
        border: 1px solid darkgoldenrod;
        font-size: 26px;
        font-weight: bold;
    }
</style>
