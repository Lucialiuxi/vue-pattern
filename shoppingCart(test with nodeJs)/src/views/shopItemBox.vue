<template>
  <div class="item-box"> 
    <div class="item-table ">
      <div class="item-row">
        <!--左侧单选框-->
        <div class="col col-check">  
          <i 
            class="iconfont icon-checkbox "
            :class="{'icon-checkbox-selected':detail.checked}"
            @click="clickListChecked"
          >√</i> 
        </div>
        <!--商品图片展示-->
        <div class="col col-img">  
          <a href="//item.mi.com/1161800009.html" target="_blank"> 
            <img alt="" src="https://i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!80x80.jpg" width="80" height="80"> 
          </a> 
        </div>

        <!--商品标题-->
        <div class="col col-name">  
          <div class="tags">   
          </div>
          <h3 class="name">  
            <a href="//item.mi.com/1161800009.html" target="_blank"> {{detail.title}} </a>  
          </h3>      
        </div>
        <!--商品单价-->
        <div class="col col-price"> {{detail.price}} </div>
        <!--商品数量-->
        <div class="col col-num">  
          <div class="change-goods-num clearfix J_changeGoodsNum"> 
            <!-- -号 -->
            <a href="javascript:void(0)" 
                class="J_minus"
                @click="decreaseHandle"
              >
              <i class="iconfont"></i>
            </a> 
            <input tyep="text"  v-model="detail.buyNumber"  autocomplete="off" class="goods-num J_goodsNum" />
             <!-- +号 -->
            <a href="javascript:void(0)" 
               class="J_plus"
               @click="increaseHandle"
            >
              <i class="iconfont"></i>
            </a>   
          </div>  
        </div>
        <!--小计-->
        <div class="col col-total"> {{detail.buyNumber*detail.price}} <p class="pre-info">  </p> </div>
        <!--操作-->
        <div class="col col-action"> 
          <a href="javascript:void(0);" title="删除" class="del">
            <i class="iconfont" 
              @click="deleteHandle"
            ></i>
          </a> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'shopItemBox',
  props:{
    detail:{
      type: [Object,Array],
      required:true,
    }
  },
  methods:{
    clickListChecked(){
        console.log('点击了',this.detail.checked)
        //点击切换选中，提交mutation到vuex更新选中状态
        this.$store.commit('updateListChecked',{
          product:this.detail,
          checked:!this.detail.checked,
        })
    },
    deleteHandle(){//点击删除，提交mutation到vuex更新选中状态
      this.$store.commit('deleteProduct',this.detail)
    },
    decreaseHandle(){//点击减号，提交mutation到vuex更新选中状态
      this.$store.commit('updateDecreaseNumber',{
        product:this.detail,
        buyNumber:this.detail.buyNumber,
      })
    },
    increaseHandle(){
      //点击加号，提交mutation到vuex更新选中状态
      this.$store.commit('updateIncreaseNumber',{
        product:this.detail,
        buyNumber:this.detail.buyNumber,
      })
    }
  },
  computed:{
    
  }
}
</script>
<style scoped>
 .item-box {
    padding: 15px 26px 15px 0;
    border-top: 1px solid #e0e0e0;
}
 .item-table {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
 .item-table .item-row {
  display: table-row;
}
 .col-check {
    width: 70px;
}
 .item-table .col {
    display: table-cell;
    vertical-align: middle;
}
 .item-box .col-img {
    width: 124px;
    height: 80px;
    padding-right: 40px;
    overflow: hidden;
}
 .col-name {
    width: 380px;
}
 .col-name .name {
    line-height: 1;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
 .col-price {
    width: 75px;
    padding-right: 84px;
    text-align: right;
    color: #424242;
    font-size: 16px;
}
 .col-name .name a {
    color: #424242;
}
 .col-num {
    text-align: center;
    color: #424242;
}
.change-goods-num {
    height: 38px;
    border: 1px solid #e0e0e0;
    text-align: center;
    background-color: #fff;
    position: relative;
    zoom: 1;
}
.change-goods-num a {
    float: left;
    width: 30px;
    height: 38px;
    line-height: 38px;
    color: #757575;
    font-size: 20px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.change-goods-num input {
    float: left;
    width: 72px;
    height: 35px;
    line-height: 38px;
    padding: 0;
    border-width: 0;
    color: #424242;
    font-size: 16px;
    text-align: center;
}
 .col-total {
    width: 146px;
    padding-right: 55px;
    text-align: right;
    color: #ff6700;
    font-size: 16px;
    font-weight: bold;
}
 .col-action {
    width: 112px;
    text-align: center;
}
 .item-box .col-action .del {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 12px;
    color: #757575;
    font-size: 16px;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.change-goods-num a:hover {
    background-color: #e0e0e0;
}
.cart-goods-list .item-box .col-action .del:hover {
    color: #fff;
    background-color: #e53935;
}
</style>
