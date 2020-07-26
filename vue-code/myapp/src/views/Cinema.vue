<template>
  <div class="cinema" :style="mystyle">
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
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      cinemaList: [],
      mystyle: {
        height: "0px"
      }
    };
  },
  mounted() {
    // console.log(document.documentElement.clientHeight);
    this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
    var id = localStorage.getItem("cityId");
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=5440610`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      //   console.log(res.data);
      this.cinemaList = res.data.data.cinemas;
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BetterScroll(".cinema", {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  height: 500px;
  overflow: hidden;
  position: relative;
  padding: 5px;
  li {
    height: 80px;
  }
}
</style>