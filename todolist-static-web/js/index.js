window.onload=function(){
    let infor = JSON.parse(localStorage.getItem('lucia')) || {}
    let vm = new Vue({
        el:document.querySelector('.todoapp'),
        data:{
           infor:infor,
           editItem:'',//记录在编辑的input
           beforeValue:'',//记录编辑之前label中显示的值
           hash:'all'
        },
        watch:{
            infor:{
                deep:true,
                handler(){
                    localStorage.setItem('lucia',JSON.stringify(this.infor))
                }
            }
        },
        methods:{
            clickEdit(obj,index){//双击编辑
                 this.editItem = obj;
                 this.beforeValue = obj.value;
                 
                 this.$nextTick(function(){
                     let edits = document.querySelectorAll('.edit');
                     for(var i = 0; i < edits.length; i++){
                         if(edits[i].dataset.id===index){
                         console.log(edits[i])
                            edits[i].focus()
                            //编辑框显示的时候，编辑框的内容和label显示的内容一致
                            edits[i].value =  this.infor[index].value
                         }
                     }
                 })
            },
            editDone(){//编辑框失去焦点
                this.editItem = ''
                this.beforeValue = ''
            },
            removeLi(li,id){//点击X 删除渲染li的数据
                vm.$delete(this.infor,id)
            },
            escDone(item){
                //把记录要的编辑框隐藏
                this.editItem = ''
                console.log(this.beforeValue)
                //label的内容是编辑之前记录的内容
                item.value = this.beforeValue;
                //使用完之后清空内容
                this.beforeValue = ''
            }
        },
        computed:{
            addData:{//添加数据
               get(){
                   
               },
               set(newValue){
                   let a = Date.now()+Math.random()
                   let obj = {
                       id:a,
                       value:newValue,
                       checked:false,
                   }
                   this.focusTitle = obj.value
                   return Vue.set(this.infor,a,obj)
               }
            },
            filterInfor(){
                if(this.hash==='all'){
                    return this.infor;
                }else if(this.hash==='active'){
                    let obj={};
                    for(let attr in this.infor){
                        if(!this.infor[attr].checked){
                            obj[attr]=this.infor[attr];
                        }
                    }
                    return obj;
                }else if(this.hash==='completed'){
                    let obj={};
                    for(let attr in this.infor){
                        if(this.infor[attr].checked){
                            obj[attr]=this.infor[attr];
                        }
                    }
                    return obj;
                }
            },
            isShow(){
                for(let attr in this.infor){
                    if(this.infor[attr].id){
                        return true;
                    }
                }
                return false;
            },
            checkedLength(){
                let arr=[];
                for(let attr in this.infor){
                    if(!this.infor[attr].checked){
                        arr.push(this.infor[attr]);
                    }
                }
                return arr.length
            },
            selectAll:{
                get(){
                    for(let attr in this.infor){
                        if(!this.infor[attr].checked){
                            return false;
                        }
                    }
                    return true;
                },
                set(newValue){
                   for(let attr in this.infor){
                        this.infor[attr].checked = newValue;
                    } 
                }
            }
        }
    })

    let hashMap = {
        all:true,
        active:true,
        completed:true
    }

    function gethash(){
        let hash = window.location.hash;
        if(hash){//如果网址有hash值，
            //#/all
            hash = hash.slice(2);//就拿到hash值的关键字
            if(!hashMap[hash]){
                ////如果网址栏的hash关键字不在hashMap中，就默认是all的状态，网址栏不显示hash值
                hash="all";
                window.location.hash='';
            }
        }else{//如果没有hash值，模式是all的状态
            hash = 'all';
        }
        vm.hash = hash;
    }

    window.onhashchange = gethash;
    gethash();








}