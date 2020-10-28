import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载vant组件库
import Vant from 'vant'
//加载vant css
import 'vant/lib/index.css'
//引入全局样式（放到最后方便覆盖第三方样式）
import './styles/index.css'

// 设置 rem 基准值
import 'amfe-flexible'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')