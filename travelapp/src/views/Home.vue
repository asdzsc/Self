<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="banner-image"
          :style="`
                 background:url(${item.url}) center center no-repeat;
                  background-size:cover;
                `"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item, index) in options"
            :key="index"
            :class="{active: currentOption === index}"
            @click="handleOption(index)"
          >
            <i>{{item.name}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input
            :placeholder="options[currentOption].placeholder"
            @keyup.enter="handleSearch"
            v-model="searchVal"
          />
          <i class="el-icon-search" @click="handleSearch"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>
 
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      // 轮播图数据
      banners: [
        {
          url:
            "https://p1-q.mafengwo.net/s16/M00/28/75/CoUBUl8z6GKAXwZiACgsfVYz3_M684.png?imageMogr2%2Finterlace%2F1"
        },
        {
          url:
            "https://p1-q.mafengwo.net/s16/M00/79/5D/CoUBUl8yiCmAGW_QACWXtiE84H0271.png?imageMogr2%2Finterlace%2F1"
        },
        {
          url:
            "https://p1-q.mafengwo.net/s16/M00/56/1F/CoUBUl8xZeSAcxzBACNkXZT1pHM047.png?imageMogr2%2Finterlace%2F1"
        },
        {
          url:
            "https://n1-q.mafengwo.net/s16/M00/0A/D9/CoUBUl8qxa2AUQPCACg61SBhkRs079.png?imageMogr2%2Finterlace%2F1"
        }
      ],
      //tab栏数据
      options: [
        {
          name: "攻略",
          placeholder: "搜索城市",
          pageUrl: "/post?city="
        },
        {
          name: "酒店",
          placeholder: "请输入城市搜索酒店",
          pageUrl: "/hotel?city="
        },
        {
          name: "机票",
          placeholder: "请输入出发地",
          pageUrl: "/air"
        }
      ],
      //当前tab栏
      currentOption: 0,
      //搜索框内容
      searchVal: ""
    };
  },
  methods: {
    handleOption(index) {
      //跳转机票页面 nuxt 默认支持$router
      if (index === 2) {
        this.$router.push("/airplane");
      }
      //tab 切换
      this.currentOption = index;
    },
    handleSearch() {
      // 获取输入框的值  this.searchVal
      // 拼接跳转的链接 默认/post?city=
      const url = this.options[this.currentOption].pageUrl + this.searchVal;
      this.$router.push(url);
    }
  },
  mounted() {
    // console.log(this.$store.state.userInfo);
    // axios({
    //   url: "http://157.122.54.189:9095/scenics/banners"
    // }).then(res => {
    //   console.log(res.data);
    //   this.banners = res.data.data;
    // });
  }
};
</script>

<style scoped lang="less">
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;

  /deep/ .el-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px transparent solid;

    .search-bar {
      width: 552px;
      margin: 0 auto;
    }

    .search-tab {
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #ff9d00;
        }
      }

      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;

        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }

    .search-input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;

      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }

      .el-icon-search {
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
