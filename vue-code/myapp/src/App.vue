<template>
  <div id="app">
    <tabbar v-show="isTabBarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// 全局组件
import Tabbar from "./components/Tabbar";
import axios from "axios";
import { mapState } from "vuex";
// import bus from "@/bus";

// import Vue from 'vue'
// Vue.component("navbar", Navbar);
// Vue.component("sidebar", Sidebar);
// ES6 导出
export default {
  components: {
    tabbar: Tabbar
  },

  data() {
    return {
      // isShow: true
    };
  },
  //   computed: {
  //     isShow() {
  //       return this.$store.state.isTabBarShow;
  //     }
  //   },
  //   conputed() {
  // isTabBarShow{
  // 	return false/true
  // }
  //   },
  //   computed: mapState(["isTabBarShow"]),
  computed: {
    ...mapState(["isTabBarShow"]) //es6合并展开运算符
  },
  methods: {},
  beforeMount() {
    // bus.$on("maizuo", data => {
    // console.log("被通知了maizuo", data);
    // this.isShow = data;
    // });
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
</style>
