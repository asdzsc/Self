<template>
  <view class="content">
    <my-form>
      <view>
        <input type="text" />
        <radio></radio>
        <checkbox></checkbox>
      </view>
    </my-form>
  </view>
</template>

<script>
import myForm from "@/components/my-form";
export default {
  components: {
    myForm
  },
  onLoad() {
    console.log("onload  页面加载完毕");
  },
  onShow() {
    console.log("onshow  页面被看到");
  }
};
</script>

<style lang="scss">
</style>


