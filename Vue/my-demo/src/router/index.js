import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Application from '@/components/Application'
import Config from '@/components/Config'
// import axios from 'axios'

import Swiper from 'swiper';
import '../assets/css/swiper.min.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/application',
      component: Application
    },
    {
      path: '/config',
      component: Config
    }
  ]
})
