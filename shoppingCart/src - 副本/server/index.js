// 设置请求的接口的函数

import axios from 'axios'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/'

export function getShopList() {
  let shopList = JSON.parse(localStorage.getItem('shop-list'));

  if (shopList){
    return new Promise((resolve,reject) => {
      resolve(shopList)
    })
  }else{
    return axios('/shop-list').then((data) => {
      localStorage.setItem('shop-list',JSON.stringify(data));
      return data;
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