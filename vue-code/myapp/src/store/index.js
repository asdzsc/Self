import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
import {
  HIDE_TABBAR_MUTATION,
  SHOW_TABBAR_MUTATION
}
from '@/types'
export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabBarShow: true,
    comingList: []
  },
  getters: { //从store.state中派生出来状态  getters的返回值根据依赖缓存起来  依赖值变化 重新计算
    comingListGetter(state) {
      return state.comingList.filter((item, index) => index < 1)
    }
  },
  mutations: { //唯一修改状态的位置
    [HIDE_TABBAR_MUTATION](state, data) {
      state.isTabBarShow = data
    },
    [SHOW_TABBAR_MUTATION](state, data) {
      state.isTabBarShow = data
    },
    comingMutation(state, data) {
      state.comingList = data
    }
  },
  actions: {
    //异步处理
    getComingListAction(store) {
      // state.commingList
      axios({
        url: "https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=2482275",
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res => {
        // console.log(res.data);
        store.commit("comingMutation", res.data.data.films)
      });
    }
  },
  modules: {}
})
