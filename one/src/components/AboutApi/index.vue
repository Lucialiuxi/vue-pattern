<template>
    <div class="about-api">
        关于attrs
        <about-attrs></about-attrs>
    </div>
</template>

<script>
import AboutAttrs from "./attr"

export default {
    data(){
        return{

        }
    },
    components:{
        "about-attrs": AboutAttrs,
    }
}
</script>

<style scoped>
    .about-api{
      border: 4px dotted firebrick;
    }
</style>