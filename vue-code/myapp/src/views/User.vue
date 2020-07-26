<template>
  <div class="User">
    <h1>This is an user page</h1>
    <mt-swipe :auto="14000" id="mint-swipe" :showIndicators="true">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  //组件内的守卫 局部守卫

  beforeRouteEnter(to, from, next) {
    // console.log(to);
    next();
  }
};
</script>  
<style lang="scss" scoped>
.User {
  #mint-swipe {
    height: 200px;
  }
}
</style></style>