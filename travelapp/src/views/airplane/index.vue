<template>
  <div class="container">
    <h2 class="air-title">
      <span class="iconfont iconfeiji"></span>
      <i>国内机票</i>
    </h2>

    <!-- 搜索广告栏 -->
    <el-row type="flex" justify="space-between">
      <!-- 搜索表单 -->
      <SearchFrom />

      <!-- banner广告 -->
      <div class="sale-banner">
        <img
          src="https://b1-q.mafengwo.net/s15/M00/C4/76/CoUBGV4O9suAX0ViAAHIIQPFJ1s41.jpeg"
          width="620"
          height="350"
        />
      </div>
    </el-row>

    <!-- 广告 -->
    <el-row type="flex" class="statement">
      <el-col :span="8">
        <i class="flightpc-s1"></i>
        <span>100%航协认证</span>
      </el-col>
      <el-col :span="8">
        <i class="flightpc-s2"></i>
        <span>出行保证</span>
      </el-col>
      <el-col :span="8">
        <i class="flightpc-s3"></i>
        <span>7x24小时服务</span>
      </el-col>
    </el-row>

    <h2 class="air-sale-title">
      <span class="iconfont icontejiajipiao"></span>
      <i>特价机票</i>
    </h2>

    <!-- 特价机票 -->
    <div class="air-sale">
      <el-row type="flex" class="air-sale-pic" justify="space-between">
        <el-col :span="6" v-for="(item, index) in sales" :key="index">
         <router-link
            :to="`/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`"
          >
		  <!-- <viewer> -->
            <img
              src="http://n1-q.mafengwo.net/s7/M00/2E/D4/wKgB6lSgx0KAAtuCAAVoSPI1DUk40.jpeg?imageMogr2%2Fthumbnail%2F%21750x563r%2Fgravity%2FCenter%2Fcrop%2F%21750x563%2Fquality%2F90"
            />
			<!-- </viewer> -->
            <el-row class="layer-bar" type="flex" justify="space-between">
              <span>{{item.departCity}}-{{item.destCity}}</span>
              <span>￥699</span>
            </el-row>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SearchFrom from "@/components/airplane/SearchForm.vue";
import axios from "axios";
// import Flights from "@/views/airplane/flights.vue";

export default {
  components: {
    SearchFrom
  },
  data() {
    return {
      sales: []
    };
  },
  mounted() {
    // 页面挂载完毕就要进行数据的和获取
    // 然后渲染特价机票列表
    axios({
      url: "http://157.122.54.189:9095/airs/sale"
    }).then(res => {
      const { data } = res.data;
      // console.log(data);
      // 将这个数据渲染到页面
      this.sales = data;
    });
  }
};
</script>

<style scoped lang="less">
.air-sale {
  border: 1px #ddd solid;
  padding: 20px;
  margin-bottom: 50px;

  .air-sale-pic {
    > div {
      width: 225px;
      height: 140px;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
      }

      .layer-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        height: 30px;
        line-height: 30px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        font-size: 14px;

        span:last-child {
          font-size: 18px;
        }
      }
    }
  }
}

.air-sale-group {
  margin-top: 20px;
  padding-top: 8px;
  border-right: 1px #eee solid;

  &:last-child {
    border-right: none;
  }

  .air-sale-row {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;

    .air-sale-price {
      color: orange;
      font-size: 20px;
    }
  }
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.air-title {
  margin: 15px 0;
  font-size: 20px;
  font-weight: normal;
  color: orange;

  span {
    font-size: 20px;
  }
}

.statement {
  margin: 15px 0;
  border: 1px #ddd solid;
  background: #f5f5f5;
  height: 58px;
  padding: 10px 0;
  box-sizing: border-box;

  > div {
    text-align: center;
    line-height: 38px;
    border-right: 1px #ddd solid;
    .flightpc-s1 {
      display: inline-block;
      background: url(https://b2-q.mafengwo.net/s14/M00/80/C2/wKgE2l0do-GAczUGAAAaNUcOHfo497.png)
        0 -90px no-repeat;
      background-size: auto;
      vertical-align: middle;
      width: 40px;
      height: 34px;
      margin-right: 15px;
    }
    .flightpc-s2 {
      display: inline-block;
      background: url(https://b2-q.mafengwo.net/s14/M00/80/C2/wKgE2l0do-GAczUGAAAaNUcOHfo497.png)
        0 -90px no-repeat;
      background-size: auto;
      background-position: -60px -90px;
      vertical-align: middle;
      width: 34px;
      height: 34px;
      margin-right: 15px;
    }
    .flightpc-s3 {
      display: inline-block;
      background: url(https://b2-q.mafengwo.net/s14/M00/80/C2/wKgE2l0do-GAczUGAAAaNUcOHfo497.png)
        0 -90px no-repeat;
      background-position: -120px -90px;
      background-size: auto;
      vertical-align: middle;
      width: 34px;
      height: 34px;
      margin-right: 15px;
    }

    &:last-child {
      border-right: none;
    }

    * {
      vertical-align: middle;
    }

    i {
      font-size: 30px;
    }
  }
}

.air-sale-title {
  margin: 15px 0;
  font-size: 20px;
  font-weight: normal;
  color: #409eff;

  span {
    font-size: 20px;
  }
}
</style>