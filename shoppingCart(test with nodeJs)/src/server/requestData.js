// 设置请求的接口的函数

import axios from 'axios'

//开发环境--请求easy-mock的数据
// axios.defaults.baseURL = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/'

//测试环境--请求本地node的后端的模拟数据
axios.defaults.baseURL = 'http://localhost:3333/shop/'

export function getShopList() {
  let shopList = JSON.parse(localStorage.getItem('shop-list'));
  if(shopList){//如果有拿到本地储存，就直接返回一个有本地储存数据的promise对象
    return new Promise((resolve,reject)=>{
      resolve(shopList)
    })
  }else{
    //没有浏览器本地储存，就axios请求数据,然后放到本地储存
    return axios('/shop-list').then(data=>{
      localStorage.setItem('shop-list',JSON.stringify(data))
      return data
    })
  }
}

export function getRecommend() {
  return axios('/recommend')
}

/* 
  params:
    data 向后端发送的数据 Object
    method: post/get

    {
      data:{
        userName:1,
        age:2
      },
      method:'psot
    }
*/