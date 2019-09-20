<template>
    <div class="about-api">
        关于attrs
        <about-attrs></about-attrs>
        <about-glob-config></about-glob-config>
    </div>
</template>

<script>
import AboutAttrs from "./attr"
import AboutGlobConfig from './globConfig'

export default {
    data(){
        return{

        }
    },
    components:{
        "about-attrs": AboutAttrs,
        "about-glob-config":AboutGlobConfig
    }
}
</script>

<style scoped>
    .about-api{
      border: 4px dotted firebrick;
    }
</style>