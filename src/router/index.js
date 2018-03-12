import Vue from 'vue'
import Router from 'vue-router'
//import App from '@/App'
import selectBar from '@/components/common/selectBar'
import lyc from '@/components/common/lyc'
import listening from '@/components/page/listening'
import rank from '@/components/page/rank'
import search from '@/components/page/search'
import listened from '@/components/page/listened'
import player from '@/components/common/player'

import rankList from '@/components/page/rankList'
Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'App',
//    component: App
//  },
//  {
//  	path:'/',
//  	name:'selectBar',
//  	component:selectBar
//  },
    {
    	path:'/',
    	name:'listening',
    	component:listening,
//			redirect:'/'
    	
    },
     {
    	path:'/page/rank',
    	name:'rank',
    	component:rank
    },
     {
    	path:'/page/search',
    	name:'search',
    	component:search
    },
    {
    	path:'/page/listened',
    	name:'listened',
    	component:listened
    },
    {
    	path:'/page/rankList',
    	name:'rankList',
    	component:rankList
    },
  ]
})
