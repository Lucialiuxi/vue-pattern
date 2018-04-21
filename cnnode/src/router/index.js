import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/all'
import Worthy from '@/components/worthy'
import Share from '@/components/share'
import Ask from '@/components/ask'
import Hire from '@/components/hire'
import Dev from '@/components/dev'
import Article from '@/components/article'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
   {
     path:'/',
     name:'all',
     component:All
   },
   {
     path:'/worthy',
     name:'worthy',
     component:Worthy
   },
   {
     path:'/share',
     name:'share',
     component:Share
   },
   {
     path:'/ask',
     name:'ask',
     component:Ask
   },
   {
     path:'/hire',
     name:'hire',
     component:Hire
   },
   {
     path:'/dev',
     name:'dev',
     component:Dev
   },
   {
     path:'/article/:id?',
     name:'article',
     component:Article
   },
  ]
})
