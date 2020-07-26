<template>
  <div>
    <ul>
      <li
        v-for="item in $store.state.comingList"
        :key="item.id"
        @click="handleClick(item.isPresale,item.filmId)"
      >
        <img :src="item.poster" alt />
        <div class="info">
          <h3>{{item.name}}</h3>
          <p v-if="item.grade">
            观众评分：
            <span>{{item.grade}}</span>
          </p>
          <p v-else></p>
          <p class="actor">主演：{{item.actors | actorfilter}}</p>
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
import Vue from "vue";
import { MessageBox } from "mint-ui";
Vue.filter("actorfilter", function(item) {
  // console.log(item);
  var newlist = item.map(item => item.name);
  // console.log(newlist);

  return newlist.join(" ");
});
export default {
  mounted() {
    if (this.$store.state.comingList.length === 0) {
      // ajax请求
      this.$store.dispatch("getComingListAction");
    } else {
      console.log("使用缓存数据");
    }
  },
  methods: {
    handleClick(isPresale, id) {
      if (!isPresale) {
        MessageBox({
          title: "提示",
          message: "该影片目前没有排期，到首页看其他电影吧?",
          showCancelButton: true
        }).then(res => {
          // console.log(res);
          if (res === "confirm") {
            this.$router.push("/home/nowplaying");
          }
        });
      }
      this.$router.push({
        name: "leodetail",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
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
