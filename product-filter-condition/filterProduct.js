Vue.component('pbox',{
    props:{
        choiceobj:{
            type:Object,
            default(){
                return {}
            }
        },
        infor:{
            type:Array,
            default(){
                return []
            }
        }
    },
    template:`
    <ul id="type">
        <li 
            v-for="item,index in infor"
            :key="index"
        >
            {{item.title}}：
            <a
                v-for="value,i in item.list" 
                :key="i"
                @click="clickHandle(index,value)"
                :style="{color :colorHandle(index,value) ? '#28a5c4' : 'black'}"
            >
                {{value}}
            </a>
        </li>
    </ul>
    `,
    methods:{
        clickHandle(index,value){
            this.$set(this.choiceobj,index,value)
            console.log(this.choiceobj)
            
            return this.choiceobj
        },
        colorHandle(index,value){
            return this.choiceobj[index]===value
        }
    }
})

let vm = new Vue({
    el:'#wrap',
    data:{
        choiceobj:{},
        infor:[
            {
                title: '品牌',
                list: ["苹果", "小米", "锤子", "魅族", "华为", "三星", "OPPO", "vivo", "乐视", "360", "中兴", "索尼"]
            },
            {
                title: '尺寸',
                list: ["3.0英寸以下", "3.0-3.9英寸", "4.0-4.5英寸", "4.6-4.9英寸", "5.0-5.5英寸", "6.0英寸以上"]
            },
            {
                title: '系统',
                list: ["安卓",  "Android", "苹果", "IOS", "微软",  "WindowsPhone", "无", "其他"]
            },
            {
                title: '网络',
                list: ["联通3G", "双卡单4G", "双卡双4G", "联通4G", "电信4G", "移动4G"]
            }
        ]
    },
    methods:{
        closeChoice(index){
            console.log(index)
            this.$delete(this.choiceobj,index)
        }
    }
})