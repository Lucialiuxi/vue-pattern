// Vuex文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 引入请求接口的函数
import {getShopList,getRecommend} from '../server/requestData'
// 创建一个vuex的容器
let store = new Vuex.Store({
    state:{
        shopList:[],
        recommend:[],
    },
    // 把处理state的逻辑放在getter中   
    getters:{//getters里面的函数都会挂载在当前实例的getters对象下
        len(state){
            console.log('数据的长度时',state.shopList.length)
            return state.shopList.length;
        },
        checkedLen(state){//选中的商品的数量
            let n = 0;
            for(let attr in state.shopList){
                if(state.shopList[attr].checked){
                    n+=state.shopList[attr].buyNumber;
                }
            }
            return n
        }
        ,   
        isCheckedAll(state){//是否全选
            console.log('全选选中的数据的长度',state.shopList.length,state.shopList)
            return state.shopList.every(item=>item.checked);
          
        }
    }
    ,
    mutations:{
        getShopListHandle(state,params){//购物车数据
            state.shopList= params.list;
        },
        getRecommendHandle(state,params){//推荐信息数据
            state.recommend= params.list;
        },
        updateListChecked(state,params){//接受点击时候提交的commit，修改数据的选中状态标识
            //找到数据中跟提交commit修改状态的对应的数据
            let product = state.shopList.find(item=>item ===params.product);
            if(product){
                product.checked = params.checked;
            }
            console.log('更新的选中状态',state.shopList,state.shopList[state.shopList.length-1].checked)
        },
        updateDecreaseNumber(state,params){
            //找到数据中跟提交commit修改状态的对应的数据
            let product = state.shopList.find(item=>item ===params.product);
            if(product){
                if(product.buyNumber>1){
                    product.buyNumber--;
                }else{
                  alert('商品件数最少为1件哦');
                  return;
                }
                product.buyNumber = product.buyNumber;
            }
        },
        updateIncreaseNumber(state,params){
            //找到数据中跟提交commit修改状态的对应的数据
            let product = state.shopList.find(item=>item ===params.product);
            if(product){
                if(product.buyNumber<product.buylimit){
                    product.buyNumber++;
                }else{
                  alert('已经达到此商品的购买数量上限');
                  return;
                }
                product.buyNumber = product.buyNumber;
            }
        },
        deleteProduct(state,params){
            let product = state.shopList.find(item=>item ===params);
            if(product){
                let index =  state.shopList.findIndex(item=>item ===product)
                state.shopList.splice(index,1)
            }
        },
        addProduct(state,params){
            console.log(Boolean({}),typeof params)
            if(params instanceof Object && params!=={}){

                let index = state.shopList.findIndex(item=>item.skuId=== params.oneProduct.skuId)

                if(index>=0){
                    //如果找到了，直接增加购买数量
                    let product = state.shopList.find(item=>item.skuId=== params.oneProduct.skuId)
                    product.buyNumber = product.buyNumber +  params.oneProduct.buyNumber

                }else{//index是-1就说明没有找到
                    params.oneProduct.checked = false
                    state.shopList.push(params.oneProduct)
                }
            }
        }
    },
    actions:{
        //dispatch派发action之后，返回一个promise对象
        getShopListAction(store){//发送mutation
           //发送请求 
           return getShopList().then((params)=>{
               let list = params.data.data.list;
               //在赋值之前给每条数据都加上checked标识
               list.forEach(item => item.checked=false);
               store.commit('getShopListHandle',{list:params.data.data.list})
           })

        },
        getRecommendAction(store){//发送mutation
           //发送请求 
           return getRecommend().then((params)=>{
               console.log('推荐',params)
               store.commit('getRecommendHandle',{list:params.data.data.list})
           })

        }
    }
})

// 对外输出容器
export default store;