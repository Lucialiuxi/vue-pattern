import Vue from 'vue'
import Vuex from 'vuex'
import { getShopList, getRecommend} from '@/server/'
// Vuex文件

Vue.use(Vuex);
// 结算页

/* 
    一个对象中定义state，mutation action getter ...
    可以作为vuex中模块使用，注入到根vuex容器中
    modules: {
      A: {
        state:{n:1},
        mutations:{changeN(){}}
      }
    },

    取A的状态 $store.state.A.n
    commit mutation $store.commit('changeN')

    多个模块的mutation action不能重名
*/

let a = 10;

// 命名空间
/* o = { a: 10 }
k = { m: {a:10} }

o.a
k.m.a */



let jisuan1 = {
  namespaced: true,
  state: {
    jiesuanNumber: 1000
  },
  mutations: {
    updataNumber(state) {
      state.jiesuanNumber = 10000;
    }
  }
}
let jisuan2 = {
  namespaced: true,
  state: {
    jiesuanNumber: 1000
  },
  mutations: {
    updataNumber(state) {
      state.jiesuanNumber = 10000;
    }
  }
}

// 没有命名空间。mutation定义多个重名的，以最后一个为准，覆盖了
// 添加命名空间 namespaced: true,   A.mutation  B.mutation

// commit mutation的时候，需要这样来写 commit('a/mutation') commit('b/some/some/mutation')

let store = new Vuex.Store({
  modules: {
    jisuan1: jisuan1,  // key值才是模块名字
    jisuan2: jisuan2
  },
  state:{
    shopList: [],
    n1: 1,
    n2: 2,
    n3: 3,
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
    changeN1(state,num){
      state.n1 = num;
    },
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


console.log(store)

export default store;