<template>
    <div class="filters">
        <input placeholder="请输入大小英文字母"  v-model="value"/>
        <p>{{value | capitalize(a,b)}}</p>
        <p>{{value | transferToUpperCase | filterSpace}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: '',
                a: '意义',
                b:'是什么'
            }
        },
        filters:{
            capitalize(value, a, b){
                if(!value) return;
                value = value.toString();
                console.log(value.toLowerCase())
                return value.toLowerCase() + a + b
            },
            filterSpace(value){
                 if(!value) return;
                let newVaule = value.split(" ").join("");
                return newVaule;
            }
        },
    }
</script>

<style scoped>
    .filters {
        background-color: azure;
    }
</style>