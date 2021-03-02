import Vue from 'vue'
import App from './App.vue'


import axios from 'axios'
Vue.prototype.axios = axios;

// 设置 rem 基准值
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')