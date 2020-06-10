<template>
  <view class="form">
    <view class="form_title">标题</view>
    <view class="form_content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  // 组件中每页加载事件
  //   onLoad() {
  //     console.log("my-form onLoad");
  //   },
  mounted() {
    console.log("my-form组件 mounted  已被挂载");
  }
};
</script>

<style>
</style>        