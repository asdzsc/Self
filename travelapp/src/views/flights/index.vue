<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList" />
        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <div>
          <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
          <!-- total 是总数据量
          每页数据的长度应该是 page-size 属性-->
          <!-- 选择页数的时候触发的函数 current-change 函数可以接受到一个 val 值代表我们点击的页码 -->
          <!-- 这里 page-sizes 是我们可以选择的条目数量选项
          选择了一个以后,就会触发 size-change事件并且将选择的数量默认人传进去-->
          <!-- <el-pagination layout="sizes, prev, pager, next"></el-pagination> -->
          <!-- <div>本页暂无数据</div> -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside />
      </div>
    </el-row>
  </section>
</template>

<script>
import axios from "axios";

import FlightsListHead from "@/components/airplane/flightsListHead.vue";
import FlightsItem from "@/components/airplane/flightsItem.vue";
import FlightsAside from "@/components/airplane/flightsAside.vue";
import FlightsFilters from "@/components/airplane/flightsFilters.vue";

export default {
  data() {
    return {
      //航班总数据
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },
      //缓存航班总数据
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },
      //默认当前页
      pageIndex: 1,
      //默认条数
      pageSize: 5,
      //默认总条数
      total: 0,
      //存当前数据
      dataList: []
    };
  },

  computed: {},

  components: {
    FlightsListHead,
    FlightsItem,
    FlightsAside,
    FlightsFilters
  },
  methods: {
    //切换条数触发
    handleSizeChange(value) {
      this.pageSize = value;
      this.setDataList();
    },
    //切换页数触发
    handleCurrentChange(value) {
      // console.log(value);
      this.pageIndex = value;
      this.setDataList();
    },
    //设置机票列表数据
    setDataList(arr) {
      if (arr) {
        this.flightsData.flights = arr;
        //初始化分页数据
        this.pageIndex = 1;
        this.total = arr.length;
        // console.log(arr.length);
      }
      //在总列表中截取当前页数据
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  mounted() {
    //   获取url参数
    // console.log(this.$route.query);
    axios({
      url: "http://157.122.54.189:9095/airs",
      method: "GET",
      params: this.$route.query
    }).then(res => {
      console.log(res.data);
      //总数据 flightsData.flights 会被修改
      this.flightsData = res.data;
      //缓存数据 一旦被赋值 不能修改
      this.cacheFlightsData = { ...res.data };
      this.dataList = this.flightsData.flights.slice(0, 5);
      this.total = this.flightsData.total;
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>