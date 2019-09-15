<template>
    <div class="all-about-props">
        <div>验证对象：{{obj.message}}</div>
        <!-- <div>作者：{{author.firstname}}.{{author.lastname}}</div> -->
    </div>
</template>

<script>
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
export default {
    inheritAttrs: true,
    props:{
        obj: {
            type: Object,
            default: function(){
                return {
                    message: "hello"
                }
            }
        }
    }
}
</script>

<style scoped>
    .all-about-props{
        color: aqua;
    }
</style>