<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            v-for="(item, index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option
            v-for="(item, index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option
            v-for="(item, index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            v-for="(item,index) in sizeOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  //   props: ["data"],
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      sizeOptions: [
        //   每一个对象都是一个尺寸,包括了 label 跟 value
        { label: "大", value: "L" },
        { label: "中", value: "M" },
        { label: "小", value: "S" }
      ]
    };
  },
  beforeUpdate() {
    // console.log(this.data.options.flightTimes[0]);
    // this.data.options.flightTimes[0].from =
    //   0 + this.data.options.flightTimes[0].from.toString();
    // let from = {
    //   str: this.data.options.flightTimes[0].from.toString() + 0,
    //   str1: this.data.options.flightTimes[0].to.toString() + 0
    // };
    // return (from = this.data.options.flightTimes[0]);
    // let str = this.data.options.flightTimes[0].from.toString() + 0;
    // let str1 = this.data.options.flightTimes[0].to.toString() + 0;
	// console.log(this.data.options.flightTimes[0].from);
	// timeArr.unshift({from:'00',to:'06'})
	let timeArr = this.data.options.flightTimes;
	timeArr[0].from = '00'
	timeArr[0].to = '06'
	timeArr[1].from = '06'
	// console.log(typeof timeArr[1].to);
  },

  props: {
    //数据
    data: {
      //type 接收的数据类型
      type: Object,
      default: {}
    }
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {
      console.log(value)
      // this.data 是缓存中的大数据 不会被更改
      const arr = this.data.flights.filter(v => {
        return v.org_airport_name === value;
      });
      this.$emit("setDataList", arr);
    },

    // 选择出发时间时候触发
    handleFlightTimes(value) {
		// value.join(':')
		console.log( value);
		console.log(typeof value);
      // this.data 是缓存中的大数据 不会被更改
      const arr = this.data.flights.filter(v => {
        //开始小时数字
        const start = +v.dep_time.split(":")[0];
        return value.from <= start && value.to > start;
      });
      this.$emit("setDataList", arr);
    },

    // 选择航空公司时候触发
    handleCompany(value) {
      console.log(value);
      // this.data 是缓存中的大数据 不会被更改
      const arr = this.data.flights.filter(v => {
        return v.airline_name === value;
      });

      this.$emit("setDataList", arr);
    },

    // 选择机型时候触发
    handleAirSize(value) {
      // console.log(value);
      // this.data 是缓存中的大数据 不会被更改
      const arr = this.data.flights.filter(v => {
        return v.plane_size === value;
      });

      this.$emit("setDataList", arr);
    },

    // 撤销条件时候触发
    handleFiltersCancel() {
      this.$emit("setDataList", this.data.flights);
      this.airport = ""; // 机场
      this.flightTimes = ""; // 出发时间
      this.company = ""; // 航空公司
      this.airSize = ""; // 机型大小
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>