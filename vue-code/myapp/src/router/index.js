import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Nowplaying from '@/views/Home/Nowplaying'
import Comingsoon from '@/views/Home/Comingsoon'
import Detail from '@/views/Detail'
import Cinema from '@/views/Cinema'
import Login from '@/views/Login'
import User from '@/views/User'
import City from '@/views/City'

Vue.use(VueRouter)
const auth = {
  isLogin() {
    return false
  }
}
const routes = [{
    // 一级路由
    path: '/home',
    component: Home,
    // 二级路由
    children: [{
      path: '/home/nowplaying', /// home/nowplaying
      component: Nowplaying
    }, {
      path: 'comingsoon',
      component: Comingsoon
    }, {
      // 二级路由重定向
      path: '',
      redirect: '/home/nowplaying'
    }]
  },
  {
    path: '/detail/:id', // 要加  : 动态路由
    name: 'leodetail',
    component: Detail
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/user',
    component: User
  }, {
    // 一级路由重定向
    path: '',
    redirect: '/home'
  }
]


const router = new VueRouter({
  mode: 'hash', //使用 history 模式时，URL 就像正常的 url  默认为hash 模式
  routes
})
//全局守卫
/**
 * router.beforeEach((to, from, next) => {
   console.log(to);
   if (to.path === "/user") {
     console.log("盘查");
     if (auth.isLogin()) {
       next()
     } else {
       next("/login")
     }
   } else {
     next()
   }
  })
 */

export default router
