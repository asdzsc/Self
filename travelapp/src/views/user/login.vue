<template>
  <div class="container">
    <!-- 主要内容 -->
    <div class="photoby">
      &lt;&nbsp;
      <a href="http://www.mafengwo.cn/i/3257017.html" target="_blank">第二个夏天——带着闺蜜去旅行..</a>&nbsp;&gt;&nbsp;by&nbsp;
      <a href="http://www.mafengwo.cn/u/193656.html" target="_blank">小A</a>
    </div>
    <el-row type="flex" justify="center" align="middle" class="main">
      <div class="form-wrapper">
        <!-- 表单头部tab -->
        <el-row type="flex" justify="center" class="tabs">
          <span
            :class="{active: currentTab === index}"
            v-for="(item, index) in [`登录`, `注册`]"
            :key="index"
            @click="handleChangeTab(index)"
          >{{item}}</span>
        </el-row>

        <!-- 登录功能组件 -->
        <LoginForm v-if="currentTab == 0" />

        <!-- 注册功能组件 -->
        <!-- 1 使用 transition 标签包裹要动画效果的 dom
        2 声明自定义的第三方动画类名-->
        <transition enter-active-class="animated fadeInRight">
          <RegisterForm v-if="currentTab == 1" />
        </transition>
      </div>
    </el-row>
  </div>
</template>

<script>
// 引入登录表单组件
import LoginForm from "@/components/user/LoginForm.vue";
import RegisterForm from "@/components/user/RegisterForm.vue";

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      currentTab: 0
    };
  },
  methods: {
    handleChangeTab(index) {
      this.currentTab = index;
    }
  }
};
</script>

<style scoped lang="less">
.container {
  background: url(https://images.mafengwo.net/images/signup/wallpaper/34.jpg)
    center 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  bottom: 0;
  right: 0;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 999;
  .photoby {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #fff;
    line-height: 2em;
    z-index: 3;
    a {
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .form-wrapper {
      width: 400px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;

      .tabs {
        display: flex;
        span {
          flex: 1;
          text-align: center;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(113, 115, 118, 1);
          line-height: 25px;
          padding: 20px 0 12px;
          position: relative;
          cursor: pointer;

          &.active:after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-left: -25px;
            width: 50px;
            height: 4px;
            background: rgba(255, 149, 0, 1);
            border-radius: 3px;
          }
        }
      }
    }
  }
}
</style>