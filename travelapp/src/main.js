import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/main.css"

// vue 点击图片显示大图
// import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
// import 'vue-directive-image-previewer/dist/assets/style.css'

// Vue点击图片预览放大（支持旋转、翻转、缩放、上下切换、键盘操作）
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

// Vue.use(VueDirectiveImagePreviewer) 
Vue.use(ElementUI);
Vue.use(Viewer)
Viewer.setDefaults({
  Options: {
    'inline': true, // 启用 inline 模式
    'button': true, // 显示右上角关闭按钮
    'navbar': true, // 显示缩略图导航
    'title': true, // 显示当前图片的标题
    'toolbar': true, // 显示工具栏
    'tooltip': true, // 显示缩放百分比
    'movable': true, // 图片是否可移动
    'zoomable': true, // 图片是否可缩放
    'rotatable': true, // 图片是否可旋转
    'scalable': true, // 图片是否可翻转
    'transition': true, // 使用 CSS3 过度
    'fullscreen': true, // 播放时是否全屏
    'keyboard': true, // 是否支持键盘
    'url': 'data-source' // 设置大图片的 url
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')