import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/admin'
import HeadCont from '@/components/header/headcont'
import Domestic from '@/components/header/domestic'
import International from '@/components/header/international'
import Login from '@/components/login'
import Register from '@/components/register'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Admin,
      children:[
        {path:'/',alias:'首页',component:HeadCont},
        {path:'/domestic',alias:'国内酒店',component:Domestic},
        {path:'/international',alias:'国际酒店',component:International},
        {path:'/domestic',alias:'机票',component:Domestic},
        {path:'/international',alias:'火车票',component:International},
        {path:'/domestic',alias:'汽车票',component:Domestic},
        {path:'/international',alias:'旅游指南',component:International}
      ]
    },
    {path:'/login',alias:'登录',tabs:true,component:Login},
    {path:'/register',alias:'注册',tabs:true,component:Register},
  ]
});
export default router;
