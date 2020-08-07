<template>
  <div class="cinema">
    <ul>
      <li v-for="item in cinemaList" :key="item.cinemaId">
        {{item.name}}
        <p style="font-size:12px">{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cinemaList: [],
    };
  },
  asyncData( ) {
      //  this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
    return axios({
       url: `https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1431985`,
       headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res=>{
      console.log(res.data);
      return {
        cinemaList:res.data.data.cinemas
        }//状态
    })
  },

};
</script>

<style scoped>
.cinema li {
  height: 80px;
}
</style>