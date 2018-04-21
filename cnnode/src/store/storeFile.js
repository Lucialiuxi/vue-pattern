// Vuex文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 引入请求接口的函数
import {getAllData,getGoodData,getShareData,getAskData,getJobData,getDevData} from '../server/requestData'
// 创建一个vuex的容器
let store = new Vuex.Store({
    state:{
        cnnodeData:[],//all
        goodData:[],//good
        askData:[],//ask
        devData:[],//dev
        jobData:[],
        shareData:[]
    },
    // 把处理state的逻辑放在getter中   
    getters:{//getters里面的函数都会挂载在当前实例的getters对象下

    }
    ,
    mutations:{
        getAllDataHandle(state,params){//购物车数据
            state.cnnodeData = params.list;
            // console.log(state.cnnodeData)
        },
        getGoodDataHandle(state,params){//购物车数据
            state.goodData = params.list;
            // console.log(state.cnnodeData)
        },
        getShareDataHandle(state,params){
            state.shareData = params.list;
        },
        getAskDataHandle(state,params){
            console.log(params)
            state.askData = params.list;
        },
        getJobDataHandle(state,params){
            console.log(params)
            state.jobData = params.list;
        },
        getDevDataHandle(state,params){
            console.log(params)
            state.devData = params.list;
        },
    },
    actions:{
        //dispatch派发action之后，返回一个promise对象
        getAllDataAction(store){//发送mutation  all
            console.log('getCnnodeDataAction执行了')
           //发送请求 
           return  getAllData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getAllDataHandle',{list:list})
           })

        },
        getGoodDataAction(store){//发送mutation good
            console.log('getGoodDataAction执行了')
           
           return  getGoodData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getGoodDataHandle',{list:list})
           })

        },
        getShareDataAction(store){//发送mutation good
            console.log('getShareDataAction执行了')
           
           return  getShareData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getShareDataHandle',{list:list})
           })

        },
        getAskDataAction(store){//发送mutation good
            console.log('getAskDataAction执行了')
           
           return  getAskData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getAskDataHandle',{list:list})
           })

        },
        getJobDataAction(store){//发送mutation good
            console.log('getJobDataAction执行了')
           
           return  getJobData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getJobDataHandle',{list:list})
           })

        },
        getDevDataAction(store){//发送mutation good
            console.log('getDevDataAction执行了')
           
           return  getDevData().then((params)=>{
               console.log(params.data)
               let list = params.data.data;
               store.commit('getDevDataHandle',{list:list})
           })

        },
    }
})

// 对外输出容器
export default store;