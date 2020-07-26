<template>
  <div v-if="filmInfo">
    <img :src="filmInfo.poster" class="poster" />
    <h2>{{filmInfo.name}}</h2>
    <h3>演职人员</h3>
    <swiper perview="4" class="actorswiper" myclassname="actorswiper">
      <div class="swiper-slide" v-for="item in filmInfo.actors" :key="item.name">
        <img :src="item.avatarAddress" alt />
        <p class="name">{{item.name}}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper perview="3" class="photoswiper" myclassname="photoswiper">
      <div class="swiper-slide" v-for="(item,index) in filmInfo.photos" :key="index">
        <img :src="item" alt />
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from "@/views/Detail/DetailSwiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from "@/types";
// import bus from "@/bus";
export default {
  data() {
    return {
      filmInfo: null
    };
  },
  components: {
    swiper
  },
  beforeMount() {
    // bus.$emit("maizuo", false);
    // this.$store.state.isTabbarShow = false;
    this.$store.commit(HIDE_TABBAR_MUTATION, false); //第一个参数是 mutation 的名字
  },
  beforeDestroy() {
    // bus.$emit("maizuo", true);
    // this.$store.state.isTabbarShow = true;
    this.$store.commit(SHOW_TABBAR_MUTATION, true);
  },
  mounted() {
    // console.log("要id 获取信息", this.$route.params.id, this.id);
    // const id = this.$route.params.id;
    // axios
    //   .get(
    //     `/ajax/detailmovie?movieId=${this.$route.params.id}&optimus_uuid=12937DB01D4B11EA8047B57D98EC7FF8AEA6BACD166649A7B0765FF44F30ADC2&optimus_risk_level=71&optimus_code=10`
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });
    const id = this.$route.params.id;
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=4359832`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.film.info"
      }
    }).then(res => {
      console.log(res.data);
      this.filmInfo = res.data.data.film;
    });
  }
};
</script>

<style lang="scss">
.poster {
  width: 100%;
}
.name {
  text-align: center;
}
.photoswiper {
  padding-bottom: 50px;
}
</style>