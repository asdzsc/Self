<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
  <div>
      <mt-swipe :auto="14000" id="mint-swipe" :showIndicators="true">
        <mt-swipe-item>1</mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
import Swiper from "swiper"; // js
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper(".filmswiper", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    });
  }
};
</script>


<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }

  .film-swiper-pagination {
    text-align: center;
  }
}
</style>
