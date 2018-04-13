<template>
  <div id="app">
    <shop-car></shop-car>
    <h2>计算页</h2>
    <button @click="change">改变计算的数据</button>
    <p>{{$store.state.jisuan1.jiesuanNumber}}</p>
    <!-- <p>{{n1}}</p> -->
    <p>{{one}}</p>
    <p>{{two}}</p>
    <p>{{three}}</p>
    <!-- <button @click='changeN1'>提交mutation改变one</button> -->
    <button @click='ketang(123)'>提交mutation改变one</button>
  </div>
</template>

<script>
import shopCar from './views/shopCar'
import { mapState,mapMutations  } from 'vuex'
export default {
  name: 'App',
  components:{
    shopCar
  },
  data(){
    return {
      miaov:10
    }
  },
  /* computed:mapState({  // 所有的计算属性的值都是从state取的

  }), */
  computed:{
    //...mapState(['n1','n2','n3']),
    ...mapState({
      one: (state) => state.n1,
      two:'n2',
      three(state) {
        
        // this指向当前的实例
        return state.n3 + this.miaov;
      }
    }),
    custom(){}
  },
   /* computed:{
   one(){
      return this.$store.state.n1
    },
     two(){
      return this.$store.state.n3
    },
     three(){
      return this.$store.state.n4
    } 
  },*/
  methods:{
    change(){
      this.$store.commit('jisuan1/updataNumber')
    },
    // 提交mutation的逻辑不复杂，可以这样写
    /* changeN1(){
      this.$store.commit('changeN1')
    }, */
    //...mapMutations(['changeN1'])
    ...mapMutations({
      ketang: 'changeN1'
    })
  }
}
</script>

<style>

</style>
