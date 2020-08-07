<template>
  <div>
    <ul>
      <li v-for="item in cominglist" :key="item.id" @click="handleClick(item.filmId)">
        <img :src="item.poster" alt />
        <div class="info">
          <h3>{{item.name}}</h3>
          <p v-if="item.grade">
            观众评分：
            <span>{{item.grade}}</span>
          </p>
          <p v-else></p>
          <p class="actor" v-if="item.actors">主演：{{item.actors | actorfilter}}</p>
          <p v-else>暂无主演</p>
          <p>{{item.nation}} | {{item.runtime}}分钟</p>
        </div>
        <div class="buy">
          <p>购票</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from "vue";
Vue.filter("actorfilter", function(item) {
  // console.log(item);
  var newlist = item.map(item => item.name);
  // console.log(newlist);

  return newlist.join(" ");
});
export default {
  // 反向代理 跨域请求
  // asyncData() {
  //   console.log(process.server);
  //   return axios({
  //   url:process.server?"http://m.maoyan.com/ajax/movieOnInfoList?token=":"/ajax/movieOnInfoList?token=",
  //   }).then(res=>{
  //     console.log(res.data);
  //     return {
  //       cominglist:res.data.movieList
  //     }// 状态
  //   })
    asyncData() {
    // console.log(process.server);
      return axios({
      url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2603963",
          headers: {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595387916670014898177","bc":"310100"}',
            "X-Host": "mall.film-ticket.film.list"
  
          }
      }).then(res=>{
        console.log(res.data);
        return {
          cominglist:res.data.data.films
        }// 状态
      })
  
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  li {
    list-style: none;
    display: flex;

    img {
      width: 100px;
      padding: 10px;
      flex: 1;
    }
    .info {
      flex: 2;
      display: flex;
      // align-items: center;
      flex-direction: column;
      // flex-wrap: wrap;
      justify-content: center;
      span {
        color: #ff5f16;
      }
      .actor {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .buy {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        border: 1px solid #ff5f16;
        color: #ff5f16;
        display: block;
        width: 50px;
        text-align: center;
      }
    }
  }
  li:last-child {
    padding-bottom: 50px;
  }
}
</style>
