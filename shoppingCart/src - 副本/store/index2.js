import Vue from 'vue'
import Vuex from 'vuex'
import { getShopList, getRecommend} from '@/server/'
// Vuex文件

Vue.use(Vuex);




let store = new Vuex.Store({
  state:{
    shopList: []
  },
  // 把处理state的逻辑放在getter中
  getters:{  // 都会挂载在当前实例的getters对象下
    isCheckedAll(state){
      return state.shopList.every(item => item.checked)
    },
    len(state) {
      return state.shopList.length;
    },
    checkedLen(state) {
      return state.shopList.filter(item => item.checked).length;;
    }
  },
  mutations:{
    changeShopList(state,payload){ // {list:[]}
      state.shopList = payload.list;

    },
    updateListChecked(state,payload){  //{shop: ,checked: true|false}
      let option = state.shopList.find(item => item === payload.shop);
      if(option){
        option.checked = payload.checked;
      }
    },
    updataListBuyNumber(state, payload){  // {shop,num}
      let option = state.shopList.find(item => item === payload.shop);
      if (option) {
        option.buyNumber = payload.num;
      }
    }
  },
  actions:{
    // 派发action之后，返回一个promise对象
    getListAction(store){
      // 发送请求
      return getShopList().then(({data}) => {
        let list = data.data.list;

        list.forEach(item => item.checked=false);


        store.commit('changeShopList',{list})
        //return data.data.list;
      })
    }
  }
})

export default store;