<template>
  <div class="shop-cart">
    <!--请求购物车数据时候loading展示-->
    <div style="text-align:center;" v-show="loading">
      <img src="../assets/timg.gif" alt="">
    </div>
    <div class="content" v-if="!loading">
      <!--数据为空，提示购物车为空，数据是有的，不提示-->
      <div class="cart-empty" id="J_cartEmpty" v-show="!shopList.length">
          <h2>您的购物车还是空的！</h2>
          <a href="" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
      </div>

      <div v-show="shopList.length" class="cart-goods-list">
        <!--购物车表头-->
        <div class="list-head clearfix">
            <div class="col col-check">
              <i class="iconfont icon-checkbox"
                :class="{'icon-checkbox-selected': $store.getters.isCheckedAll}"
              >√</i>
              全选</div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
        </div>
        <!--购物车展示商品信息-->
        <div class="list-body">
          <shop-item-box
            v-for="item in shopList" :key="item.skuId"
            :option='item'
          ></shop-item-box>
        </div>
      </div>
      <!--计算价钱的信息-->
      <shop-info v-show="shopList.length"></shop-info>
    </div>
    <recommend></recommend>
  </div>
</template>
<script>
import ShopItemBox from './shopItemBox'
import ShopInfo from './shopInfo'
import recommend from './recommend'
import { mapState } from 'vuex'
export default {
  components: {
    ShopItemBox,
    ShopInfo,
    recommend
  },
  data(){
    return {
      //shopList: []
      loading: true  // 没回来之前，loading显示
    }
  },
  computed:{
    /* shopList(){
      return this.$store.state.shopList;
    }, */
    //...mapState(['shopList'])
    ...mapState({
      shopList(state){
        return state.shopList
      }
    })
   /*  isCheckedAll(){
      return  this.shopList.every(item => item.checked)
    } */
  },
  created(){
    // 派发一个action之后，返回的是promise对象，使用then
    /* 
        取数据
          规划是在vuex中取数据，一律都从vuex中取值，前期规划好了这个数据是多个组件公用的
        局部的数据，正好请求是在action中，在action返回一个promise，在派发额组件中拿到数据，这个数据不是从vuex拿的
  
    */
   /*  this.$store.dispatch('getListAction').then((data) => {
      console.log(123,data)
      this.shopList = data;
    }) */
    /* 
        两个组件，发送的是同一个接口，派发同一个action
        A组件中，发送请求后打印1
        B组件中，发送请求后打印2

        最起码需要知道 ajax回来
    */
    this.$store.dispatch('getListAction').then(() =>{
      this.loading = false;
    })
  }
}
</script>
<style>
@import url('./css/font');
</style>

<style scoped>

.cart-empty {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 130px;
    background: url(https://s01.mifile.cn/i/cart/cart-empty.png) no-repeat 124px 0;
    color: #b0b0b0;
    overflow: hidden;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
.cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
}
.cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
}

.shop-cart {
  width: 1300px;
  margin: 0px auto;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  overflow: hidden;
}
.list-body {
  overflow: hidden;
}
.list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  width: 75px;
  padding-right: 84px;
  text-align: right;
  color: #424242;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

</style>

