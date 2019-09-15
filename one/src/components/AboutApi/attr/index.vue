<template>
    <div class="about-attrs">
        关于attrs
        <Parent :familyMember="familyMember"></Parent>
    </div>
</template>

<script>
import Parent from "./parent"

export default {
    data(){
        return{
            familyMember:{
                parentInfo:{
                    age: "55 years old",
                    height: "175cm",
                    character: "teacher"
                },
                childrenInfo:{
                    age: "30 years old",
                    height: "178cm",
                    character: "doctor"
                },
                grandsonInfo:{
                    age: "3 years old",
                    height: "80cm",
                    character: "student"
                }
            }
        }
    },
    components:{
        Parent,
    }
}
</script>

<style scoped>
    .about-attrs{
       text-shadow: 5px 5px 5px #FF0000;
       font-size: 34px;
       color:fuchsia;
    }
</style>