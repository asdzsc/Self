<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
  </div>
</template>

<script>
import Swiper from "swiper"; // js
import "swiper/swiper-bundle.css";
export default {
  props: ["perview", "myclassname"],
  mounted() {
    // console.log(this.myclassname);
    /* eslint-disable no-new */
    new Swiper("." + this.myclassname, {
      // direction: 'vertical'
      slidesPerView: this.perview,
      spaceBetween: this.myclassname === "actorswiper" ? 20 : 10,
      freeMode: true
    });
  }
};
</script>


<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
