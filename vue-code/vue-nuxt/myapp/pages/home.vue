<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in looplist" :key="item.bannerId">
        <img :src="item.imgUrl" alt />
      </el-carousel-item>
    </el-carousel>
    <ul class="li">
      <nuxt-link to="/home/nowplaying" tag="li" activeClass="active">正在热映</nuxt-link>
      <nuxt-link to="/home/comingsoon" tag="li" activeClass="active">即将上演</nuxt-link>
    </ul>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData() {
    return axios({
      url:"https://m.maizuo.com/gateway?type=2&cityId=310100&k=8001987",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595387916670014898177","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res=>{
      // console.log(res.data.data);
      return {
        looplist:res.data.data
      }
    })
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.el-carousel__container {
  height: 220px;
}
.el-carousel__item {
  width: 100vw;
}
.el-carousel__item img {
  width: 100%;
}
.li {
  display: flex;
}
.li li {
  text-align: center;
  margin: 0 10px;
  flex: 1;
}
.active {
  border-bottom: 3px solid #ff5f16;
  color: #ff5f16;
}
</style>