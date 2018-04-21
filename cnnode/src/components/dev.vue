<template>
    <div>
        <ul>
            <li
                v-for="item in filterDevData"
                :key="item.id"
            >
                <img :src="item.author.avatar_url" />
                <span>{{item.reply_count}}</span>
                <span>/</span>
                <span>{{item.visit_count}}</span>
                <router-link
                tag="a"
                :to="{name:'article',params:{id:item.id,content:item.content}}"
                >{{item.title}}</router-link>
            </li>
        </ul>
        <Page :total="devData.length" @on-change="changePage" :page-size="10"></Page>
    </div>
</template>
<script>
import Vuex from 'vuex'
import index from 'vue';
export default {
  name: 'Job',
  data(){
      return{
          beginPage:0,
          endPage:9
      }
  },
  beforeRouteEnter(to,from,next){
      //实例已经创建完成之后，发送数据请求给action，通过action提交mutation，
      //action给返回一个promise对象，就可以使用then     
      next(function(vm){
        vm.$store.dispatch('getDevDataAction')
      })
  }
  ,
  methods:{
      changePage(n){
          console.log(n)
          n = n || 1;
          this.beginPage = 10*n -10;
          this.endPage = 10*n -1;
        //   console.log(beginPage,endPage)
      }
  },
  computed:{
      devData(){
          return this.$store.state.devData
      },
      filterDevData(){
          let arr = this.devData.filter((item,index)=> index>=this.beginPage && index<=this.endPage)
        //   console.log(arr)
          return arr
          
      }
  }
}
</script>
<style>
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        height: 500px;
    }
    img{
        height: 30px;
        width: 30px;
        border:none;
    }
    li{
        height: 30px;
        margin: 10px 0px;
        border-bottom: 1px solid lightgrey;
        box-sizing: content-box;
        padding-bottom: 5px;
    }
    li span, li img, li a{
        float: left;
        height: 30px;
        line-height: 30px;
        text-align: top;
    }
    li a{
        margin-left: 10px;
        width: 60%;
        overflow: hidden;
    }
    li img{
        margin-right: 10px;
        border: none;
    }
</style>

