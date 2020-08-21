import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/post/index.vue'
import Hotel from '@/views/hotel/index.vue'
import Airplane from '@/views/airplane/index.vue'
import Flights from '@/views/flights/index.vue'
import User from '@/views/user/login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }, {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel
  }, {
    path: '/airplane',
    name: 'Airplane',
    component: Airplane,
  }, {
    path: '/flights',
    name: 'Flights',
    component: Flights,
  }, {
    path: '/user/login',
    name: 'User',
    component: User
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router