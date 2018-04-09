window.onload =function(){
    Vue.component('tip-box',{
        props:{
            'title':{
                type:[Array,String,Object],
                default:'这里是默认的标题'
            },
            
            'content':{
                type:[Array,String,Object],
                default:'在这里添加默认的内容'
            },
            'okBtn':{
                type:String,
                default:'确定'
            },
            'cancelBtn':{
                type:String,
                default:'取消'
            },
            'value':{
                type:Boolean,
                default:false,
            },
        },
        data(){
            return {
                
            }
        },
        template:'#tip',
        methods:{
            childClickConfirmHandle(){
                this.$emit('click-confirm',this.okBtn),
                this.$emit('input',false)             
            },
            childClickCancelHandle(){
                this.$emit('click-cancel',this.cancelBtn)
                this.$emit('input',false) 
            }
        }
        
    })

    new Vue({
        el:'#app',
        data:{
            title1:'父组件给的标题',
            content1:'父组件的内容',
            tipBoxView:false,
        },
        methods:{
            parentConfirmHandle(params){ 
                console.log('父组件订阅--确定',params)
            },
            parentCancelHandle(params){
                console.log('父组件订阅--取消',params)
            },
            fn(obj){
                console.log(obj)
            }

        },
        computed:{

        }
    })
}