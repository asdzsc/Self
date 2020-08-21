<template>
  <header class="header">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="../../public/logo.png" alt />
        </router-link>
      </div>

      <!-- 菜单栏 -->
      <el-row type="flex" class="navs">
        <router-link to="/">首页</router-link>
        <router-link to="/post">旅游攻略</router-link>
        <router-link to="/hotel">酒店</router-link>
        <router-link to="/airplane">国内机票</router-link>
      </el-row>

      <!-- 登录/用户信息 -->
      <el-row type="flex" align="middle">
        <!-- 如果用户存在则展示用户信息，用户数据来自store -->
        <el-dropdown v-if="$store.state.userInfo.token">
          <el-row type="flex" align="middle" class="el-dropdown-link">
            <router-link to="#">
              <img :src="$store.state.userInfo.user.img" />
              {{$store.state.userInfo.user.name}}
            </router-link>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-row>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="#">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="handleLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 不存在用户信息展示登录注册链接 -->
        <router-link to="/user/login" class="account-link" v-else>登录 / 注册</router-link>
      </el-row>
    </el-row>
  </header>
</template>
<script>
export default {
  mounted() {
    // console.log(this.$store.state.userInfo.token);
  },
  methods: {
    // 用户退出
    handleLogout() {
      this.$store.commit("clearUserInfo");
      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
};
</script>
<style scoped lang="less">
.header {
  height: 60px;
  line-height: 60px;
  background: #fff;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;

  .main {
    width: 1000px;
    margin: 0 auto;
  }

  .logo {
    width: 156px;
    padding-top: 8px;
    margin-right: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  .navs {
    margin: 0 20px;
    flex: 1;

    a {
      display: block;
      padding: 0 20px;
      height: 60px;
      box-sizing: border-box;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 5px #ff9d00 solid;
        color: #ff9d00;
      }
    }

    /deep/ .router-link-exact-active {
      background: #ff9d00;
      color: #fff !important;
    }
  }

  .message {
    height: 36px;
    line-height: 1;
    cursor: pointer;
    .el-icon-bell {
      margin-right: 2px;
      font-size: 18px;
    }
  }

  .el-dropdown-link {
    margin-left: 20px;

    &:hover {
      img {
        border-color: #ff9d00;
      }
    }

    a {
      display: block;
    }

    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border: 2px #fff solid;
      border-radius: 50px;
    }
  }

  .account-link {
    font-size: 14px;
    margin-left: 10px;
    color: #666;

    &:hover {
      color: #ff9d00;
      text-decoration: underline;
    }
  }
}
</style>