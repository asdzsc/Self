<template>
  <div v-if="filmInfo">
    <img :src="filmInfo.poster" class="poster" />
    <h2>{{filmInfo.name}}</h2>
    <h3>演职人员</h3>
    <el-carousel class="slide_wrap" indicator-position="outside">
      <el-carousel-item class="slide" v-for="item in filmInfo.actors" :key="item.name">
        <img :src="item.avatarAddress" alt />
        <p class="name">{{item.name}}</p>
      </el-carousel-item>
    </el-carousel>
    <h3>剧照</h3>

    <el-carousel height="200px" direction="vertical" :autoplay="false">
      <el-carousel-item class="photoswiper" v-for="(item,index) in filmInfo.photos" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item class="swiper-slide" v-for="(item,index) in filmInfo.photos" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>-->
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
import Mint from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.use(Mint);
export default {
  layout: 'detail',
   data(){
    return {
      filmInfo: null
    }
  }, 
  components:{
    Swipe:Swipe,
    SwipeItem:SwipeItem
  },
  asyncData(item) {
    console.log(item);
    return axios({
      url:`https://m.maizuo.com/gateway?filmId=${item.params.myid}&k=1585644`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.info'
 
      }
    }).then(res=>{
      console.log(res.data);
      return {
        filmInfo:res.data.data.film
      }// 状态
    })
  },

}
</script>

<style>
.poster {
  width: 100%;
}
.name {
  text-align: center;
}
.slide_wrap {
  /* display: flex; */
  width: 80vw;
  margin: 0 auto;
}
.slide {
  display: flex;
}
.slide .name {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.photoswiper {
  padding-bottom: 50px;
}
.photoswiper img {
  width: 100vw;
}
</style>