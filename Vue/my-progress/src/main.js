import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// console.log(process.env.VUE_APP_TITLE)
Object.defineProperty(Vue.prototype,'$http',{
	value:axios
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
