<template>
    <div class="grandson">
        grandson的信息
        <BaseInfo :info="getInfo"/>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    components:{

    },
    computed:{
        getInfo(){
            let Info = this.$attrs.familyMember.grandsonInfo
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