import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
import Console from '@/views/console'
import List from '@/views/artlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld //vue file position
    },
    {
		path: '/login',
    	name: '登陆',
    	component : Login
    },
    {
      path: '/console',
      name:'控制台',
      component:Console
    },
    {
      path: '/',
      name:'列表',
      component:List
    }
  ]
})
