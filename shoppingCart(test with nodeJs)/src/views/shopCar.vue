<template>
  <div class="shop-cart">
    <!--请求购物车数据时候loading展示-->
    <div style="text-align:center;" v-if="!isgetList">
      <img src="../assets/timg.gif" alt="">
    </div>
      <!-- 请求到数据才渲染整个购物车的模块 -->
    <div class="content" v-if="isgetList">
      <!-- 请求到购物车商品数据后，购物车在有商品的时候没有才显示，否则隐藏 -->
      <div class="cart-empty" id="J_cartEmpty" v-show="!$store.getters.len">
          <h2>您的购物车还是空的！</h2>
          <a href="" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
      </div>
        <!-- 请求到购物车商品数据后，购物车在有商品的时候才显示，否则隐藏 -->
      <div class="cart-goods-list" 
           v-show="$store.getters.len">
        <!--购物车表头-->
        <div class="list-head clearfix">
            <div class="col col-check">
                <i class="iconfont icon-checkbox "
                    :class="{'icon-checkbox-selected':$store.getters.isCheckedAll}"
                    @click="selectAllClickHandle"
                >√</i>全选</div>
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
            v-for="item in shopList"
            :key="item.skuId"
            :detail="item"
          ></shop-item-box>
        </div>
      </div>
      <!--计算价钱的信息-->
      <shop-info :list="shopList"></shop-info>
    </div>
    <recommend :recommend="recommend"></recommend>
  </div>
</template>
<script>
  // 根模块，引入其他模块
  import shopInfo  from './shopInfo';
  import shopItemBox  from './shopItemBox';
  import recommend  from './recommend';
  import {mapState} from 'vuex'

  export default {
    name:'shopCar',
    components:{//注册子组件
      shopInfo,
      shopItemBox,
      recommend
    },
    created(){
      // 发送数据请求给actions,通过action提交mutation,派发action之后，action给返回一个promise对象，就可以使用then
      this.$store.dispatch('getShopListAction').then(()=>{
          this.isgetList=true
      })
    },
    computed:/*{
      shopList(){
        return this.$store.state.shopList
      }, 
      recommend(){
        return this.$store.state.recommend
      }
    }*/
    //映射this.$store.state.shopList 和this.$store.state.shopList
    mapState(['shopList','recommend'])
    ,
    methods:{
      selectAllClickHandle(){//全选
          this.selectAll=!this.selectAll
          this.shopList.forEach(item =>  item.checked = this.selectAll);
      }
    },
    data(){
      return{
        selectAll:false,
        isgetList:false,//记录是否请求到shopList的状态,数据没有回来之前，加载图标显示
      }
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

