<template>
    <div class="parent">
        parent的信息
        <BaseInfo :info="getInfo"/>
        <Children v-bind="$attrs"></Children>
    </div>
</template>

<script>
import Children from "./children"

export default {
    data(){
        return{
            
        }
    },
    components:{
        Children
    },
    computed:{
        getInfo(){
            let parentInfo = this.$attrs.familyMember.parentInfo
            return {
                age: parentInfo.age,
                height: parentInfo.height,
                character: parentInfo.character,
            }
        }
    }
}
</script>

<style scoped>
</style>