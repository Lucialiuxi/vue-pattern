<template>
    <div> 
        依赖注入2
        <br/>
        bar显示：{{bar}}
        <br/>
        baz显示：{{baz}}
        <br/>
        <ul>
            <li v-for="bval in bbb" :key="bval">{{bval}}</li>
        </ul> 
    </div>
</template>

<script>
export default {
    inject:{
        foo: {default:"foo"},
        aaa:{
            from: "aaaFrom",
            default:"aaaDefault"
        },
        bbb:{
            from: "bbbFrom",
            default:()=>[1,2,3]
        }
    },
    props:{
       bar:{
           default(){
               return this.foo;
           }
       },
       baz:{
           default(){
               return this.aaa;
           }
       }
    },
    data(){
        return {
           
        }
    }
}
</script>