import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Home from "../components/home.vue"
import Buyticket from "../components/buyticket.vue"
import Mall from "../components/mall.vue"
import Find from "../components/find.vue"
import My from "../components/my.vue"
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/buyticket',
      component: Buyticket
    },{
      path: '/mall',
      component: Mall
    },
    {
      path: '/find',
      component: Find
    },
     {
      path: '/my',
      component: My
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
