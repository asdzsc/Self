<template>
  <view class="content">
    <!-- 4.使用组件 -->
    子组件传递过来的参数:{{ src }}
    <img-border @srcChange="handleChange" :src="src1"></img-border>
    <img-border @srcChange="handleChange" :src="src2"></img-border>
  </view>
</template>

<script>
//2.引入自定义组件
import imgBorder from "@/components/img-border";
export default {
  data() {
    return {
      src: "",
      src1:
        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1587886160&di=04a72890983e12da6ceb2a040b05515c&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
      src2:
        "http://img2.imgtn.bdimg.com/it/u=3252521864,872614242&fm=26&gp=0.jpg"
    };
  },
  //3 注册组件
  components: {
    imgBorder
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.src = e;
    }
  },
  onLoad() {
    console.log(this.baseurl);
    //获取global data
    console.log(getApp().globalData.base);
  }
};
</script>

<style lang="scss">
</style>


