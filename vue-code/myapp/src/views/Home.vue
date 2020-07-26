<template>
  <div>
    <swiper :key="looplist.length" ref="mytop">
      <div class="swiper-slide" v-for="item in looplist" :key="item.goods_id">
        <img :src="item.image_src" alt />
      </div>
    </swiper>
    <!-- <div>home header</div> -->
    <filmheader :class="isFixed ? 'fixed' : ''"></filmheader>
    <router-view></router-view>
  </div>
</template>
<script>
import swiper from "@/views/Home/Swiper";
import filmheader from "@/views/Home/Filmheader";
import "swiper/swiper-bundle.css";
import axios from "axios";
export default {
  data() {
    return {
      looplist: [],
      isFixed: false
    };
  },
  components: { swiper, filmheader },
  mounted() {
    axios
      .get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata")
      .then(res => {
        // console.log(res.data.message);
        this.looplist = res.data.message;
      });
    window.onscroll = this.handleScroll;
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = this.$refs.mytop.$el.offsetHeight;
      if (scrollTop >= offsetHeight) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>  
<style lang="scss">
</style>