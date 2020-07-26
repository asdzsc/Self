<template>
  <div>
    <mt-index-list>
      <mt-index-section :index="item.index" v-for="item in cityList" :key="item.index">
        <div @click="handleClick(city.cityId)" v-for="city in item.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cityList: []
    };
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?k=1837079",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595387916670014898177"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      //   console.log(res);
      this.cityList = this.handleCity(res.data.data.cities);
    });
  },
  methods: {
    handleCity(item) {
      //   console.log(item);
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        //String.fromCharCode 转换大写字母
        letterArr.push(String.fromCharCode(i));
      }
      //   console.log(letterArr);

      var newlist = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = item.filter(
          item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        // console.log(arr)
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          });
        }
      }
      console.log(newlist);
      return newlist;
    },
    handleClick(id) {
      //   console.log("ee");
      //   console.log(id);
      localStorage.setItem("cityId", id);
      this.$router.push("/cinema");
    }
  }
};
</script>

<style>
</style>