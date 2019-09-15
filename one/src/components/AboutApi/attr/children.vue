<template>
    <div class="children">
        children的信息
        <BaseInfo :info="getInfo"/>
        <Grandson v-bind="$attrs"></Grandson>
    </div>
</template>

<script>
import Grandson from "./grandson"

export default {
    data(){
        return{

        }
    },
    components:{
        Grandson
    },
    computed:{
        getInfo(){
            let Info = this.$attrs.familyMember.childrenInfo
            return {
                age: Info.age,
                height: Info.height,
                character: Info.character,
            }
        }
    }
}
</script>

<style scoped>
</style>