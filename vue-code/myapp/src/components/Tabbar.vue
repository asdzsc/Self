<template>
  <!-- 声名式导航 -->
  <ul class="nav">
    <router-link to="/city" activeClass="myactive" tag="li">
      <i class="iconfont icon-search"></i>
      City
    </router-link>
    <router-link to="/home" activeClass="myactive" tag="li">
      <i class="iconfont icon-form"></i>
      Home
    </router-link>
    <router-link to="/cinema" activeClass="myactive" tag="li">
      <i class="iconfont icon-all"></i>Cinema
    </router-link>
    <router-link to="/user" activeClass="myactive" tag="li">
      <i class="iconfont icon-account"></i>User
    </router-link>
  </ul>
</template>
<style lang="scss" scoped>
.myactive {
  color: red;
}
.nav {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: #fff;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
