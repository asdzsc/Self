import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/login",
  name: "login",
  component: () => import("@/views/Login/")
}, {
  //一级路由渲染到根组件中的router-view
  path: '/',
  component: () => import("@/views/Layout/"),
  children: [{
    //二级路由渲染到父级路由组件中的router-view中
    path: '', //默认子路由
    name: "home",
    component: () => import("@/views/Home/"),
  }, {
    path: '/ask',
    name: "ask",
    component: () => import("@/views/Ask/"),
  }, {
    path: '/video',
    name: "video",
    component: () => import("@/views/Video/"),
  }, {
    path: '/mine',
    name: "mine",
    component: () => import("@/views/Mine/"),
  }]
}]

const router = new VueRouter({
  mode: "hash",
  routes
})

export default router