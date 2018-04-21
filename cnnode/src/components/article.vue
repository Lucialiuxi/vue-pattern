<template>
  <div v-html="content"></div>
</template>
<script>
 
  export default {
    data(){
      return {
        content:'',
      }
    },
    created(){
      // 当前访问的路径的路由信息对象 $route
      // 路由的实例 $router
      this.content = this.$route.params.content;
    }
  }
</script>
