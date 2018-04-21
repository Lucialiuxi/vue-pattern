// 设置请求的接口的函数

import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'


export function  getAllData() {
  // let cnode = JSON.parse(localStorage.getItem('cnode'));
  // if(cnode){//如果有拿到本地储存，就直接返回一个有本地储存数据的promise对象
  //   return new Promise((resolve,reject)=>{
  //     resolve(cnode)
  //   })
  // }else{
    //没有浏览器本地储存，就axios请求数据,然后放到本地储存
  //   return axios('/topics/?tab=ask').then(data=>{
      // localStorage.setItem('cnode',JSON.stringify(data))
  //     return data
  //   })
  // }
  //没有浏览器本地储存，就axios请求数据,然后放到本地储存
  return axios('/topics/?tab=')
}
export function getGoodData(){
  return axios('/topics/?tab=good')
}
export function getShareData(){
  return axios('/topics/?tab=share')
}
export function getAskData(){
  return axios('/topics/?tab=ask')
}
export function getJobData(){
  return axios('/topics/?tab=job')
}
export function getDevData(){
  return axios('/topics/?tab=dev')
}
