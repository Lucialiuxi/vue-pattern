<template>
    <div class="about-api">
        关于attrs
        <anchor-test></anchor-test>
        <about-attrs></about-attrs>
        <p :style="{color:test.color}">{{test.hahaha}}</p>
        <button @click.once="showAnchorHandle">点击切换显示锚点</button>
        <button @click="changeTest">修改对象的属性</button>
        <about-glob-config 
            :showAnchor="showAnchor"
            :anchorList="anchorList"
        ></about-glob-config>
    </div>
</template>

<script>
import AboutAttrs from "./attr"
import AboutGlobConfig from './globConfig'

import AnchorTest from "./globConfig/anchorTest";

export default {
    data(){
        return{
            showAnchor:true,
            anchorList:[
                {
                    id: "#miao",
                    title:"去找喵星人",
                },
                {
                    id: "#wang",
                    title:"去找汪星人",
                },
                {
                    id: "#meng",
                    title:"去找萌萌哒",
                },
            ],
            test:{
                hahaha:"hahahah",
                color:'red'
            }
        }
    },
    components:{
        "about-attrs": AboutAttrs,
        "about-glob-config": AboutGlobConfig,
        "anchor-test": AnchorTest
    },
    methods:{
        showAnchorHandle(){
            this.$forceUpdate();
            this.anchorList.push({
                id:"#test",
                title:"测试更新"
            })
        },
        changeTest(){//失效
            this.$set(this,this.test.hahaha,'哈哈哈哈')
            this.hahaha='哈哈哈哈';
            this.color='yellow';
        }
    }
}

</script>

<style scoped>
    .about-api{
      border: 4px dotted firebrick;
    }
</style>