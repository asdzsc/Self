<template>
  <div class="cinema_body">
    <Loading v-if="isLoading" />
    <Scroller v-else>
      <ul>
        <li v-for="item in cinemaList" :key="item.id">
          <div>
            <span>{{ item.addr }}</span>
            <span class="q">
              <span class="price">{{ item.sellPrice }}</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{ item.nm }}</span>
            <span>{{ item.distance }}</span>
          </div>
          <div class="card">
            <div
              v-for="(num,key) in item.tag"
              :key="key"
              
              :class=" key | formatCalss"
            >
           <div v-if="num === 1">{{ key | formatCard }}
           </div>
         </div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>
<script>
export default {
  name: "CinemaList",
  data() {
    return {
      cinemaList: [],
      isLoading: true,
      prevCityId: -1
    };
  },
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;
    this.axios
      .get("/json?day=2019-09-21&offset=0&limit=2000&cityId=" + cityId)
      .then(res => {
        var msg = res.statusText.toLowerCase();
        // console.log(msg);
        // console.log(res.data.cinemas);
        if (msg == "ok") {
          this.isLoading = false;
          this.cinemaList = res.data.cinemas;
          this.prevCityId = cityId;
        }
      });
  },
  filters: {
    formatCard(key) {
      var card = [
        { key: "allowRefund", value: "可退" },
        { key: "sell", value: "热卖" },
        { key: "snack", value: "小吃" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    },
    formatCalss(key) {
      var card = [
        { key: "allowRefund", value: "bl" },
        { key: "hallType", value: "bl" },
        { key: "sell", value: "or" },
        { key: "snack", value: "or" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    }
  }
};
</script>  
<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  float: right;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>