<template>
  <view class="content">
    <view class="rpx">rpx</view>
    <view class="vw">vw</view>
    <view class="sass">sass</view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.rpx {
  /* rpx 为小程序中的单位  750rpx = 屏幕宽度 */
  width: 750rpx;
  height: 100px;
  background-color: aqua;
}

.vw {
  /* vh vw   为h5中的单位  100vh = 屏幕高度,100vw = 屏幕宽度 */
  width: 50vw;
  height: 100px;
  background-color: tan;
}
.content {
  .sass {
    background-color: red;
    color: $uni-text-color;
  }
}
</style>


