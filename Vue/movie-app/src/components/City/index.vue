<template>
  <div class="city_body">
    <!-- <div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li>上海</li>
				</ul>
			</div>
			<div class="city_sort">
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
			</ul>
		</div>
    </div>-->

    <div class="city_list">
      <Loading v-if="isLoading" />
      <Scroller v-else ref="city_list">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li
                v-for="item in hotlist"
                :key="item.id"
                @tap="handleToCity(item.nm,item.id)"
              >{{ item.nm }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in citylist" :key="item.index">
              <h2>{{ item.index }}</h2>
              <ul>
                <li
                  v-for="itemList in item.list"
                  :key="itemList.id"
                  @tap="handleToCity(itemList.nm,itemList.id)"
                >{{ itemList.nm }}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in citylist"
          :key="item.index"
          @touchstart="handleToIndex(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "City",
  data() {
    return {
      citylist: [],
      hotlist: [],
      isLoading: true
    };
  },
  mounted() {
    var citylist = window.localStorage.getItem("citylist");
    var hotlist = window.localStorage.getItem("hotlist");

    if (citylist && hotlist) {
      this.citylist = JSON.parse(citylist);
      this.hotlist = JSON.parse(hotlist);
      this.isLoading = false;
      // console.log(this.citylist);
      // console.log(this.hotlist);
    } else {
      this.axios.get("/api/cityList").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.isLoading = false;
          var cities = res.data.data.cities;
          var { citylist, hotlist } = this.formatCitylist(cities);
          // [{ index:"A",list:[{ nm:"阿城"，id:123 }] }]
          this.citylist = citylist;
          this.hotlist = hotlist;
          window.localStorage.setItem("citylist", JSON.stringify(citylist));
          window.localStorage.setItem("hotlist", JSON.stringify(hotlist));
        }
      });
    }
  },
  methods: {
    formatCitylist(cities) {
      var citylist = [];
      var hotlist = [];

      for (let i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase(); //截取第一个字符并转成大写

        if (toCom(firstLetter)) {
          //新添加index
          citylist.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          //累加到已有index中
          for (let j = 0; j < citylist.length; j++) {
            if (citylist[j].index == firstLetter) {
              citylist[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotlist.push(cities[i]);
        }
      }
      function toCom(firstLetter) {
        //对比判断函数
        for (let i = 0; i < citylist.length; i++) {
          if (citylist[i].index == firstLetter) {
            return false;
          }
        }
        return true;
      }
      citylist.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return false;
        }
      });
      return {
        citylist,
        hotlist
      };
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
    },
    handleToCity(nm, id) {
      this.$store.commit("city/CITY_INFO", { nm, id });
      window.localStorage.setItem("nowNm", nm);
      window.localStorage.setItem("nowId", id);
      this.$router.push("/movie/nowPlaying");
    }
  }
};
</script>  
<style scoped>
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
.city_body .city_index .active {
  color: #e54847;
}
</style>