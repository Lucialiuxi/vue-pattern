<template>
    <div> 依赖注入{{sum()}}--{{s}}--{{bar}}</div>
</template>

<script>
export default {
    inject:['sum','s'],
    props:{
        
    },
    data(){
        return {
            bar: this.s
        }
    }
}
</script>