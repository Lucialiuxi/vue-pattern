<template>
    <div>
        <DirectiveExample/>
        <span class="line"></span>
        <DynamicArg/>
        <span class="line"></span>
        <HookFunction/>
        <span class="line"></span>
        <ObjectLiterals/>
    </div>
</template>

<script>
import DirectiveExample from './example.vue'
import HookFunction from './hookFunction'
import DynamicArg from './dynamic-directive-arguments'
import ObjectLiterals from './object-literals'

export default {
    data(){
        return {
            
        }
    },
    components:{
        DirectiveExample,
        HookFunction,
        DynamicArg,
        ObjectLiterals
    }
}
</script>
<style scoped>
    .line {
        width: 100%;
        height: 1px;
        /* background-color: green; */
        display: block;
        margin: 5px 0;
    }
</style>