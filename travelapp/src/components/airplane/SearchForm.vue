<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <!-- <el-row type="flex" class="search-tab">
      <span>
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>-->
    <el-row type="flex" class="search-radio">
      <el-radio v-model="radio" label="1" @change="handleLabel">
        <span>单程</span>
      </el-radio>
      <el-radio v-model="radio" label="2" @change="handleLabel1">
        <span>往返</span>
      </el-radio>
    </el-row>

    <el-form :model="form" class="search-form-content" ref="form" label-width="80px">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="selectDepartCity"
          v-model="form.departCity"
          class="el-autocomplete"
          :trigger-on-focus="false"
          :highlight-first-item="true"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="到达城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="selectDestCity"
          v-model="form.destCity"
          class="el-autocomplete"
          :trigger-on-focus="false"
          :highlight-first-item="true"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->
        <el-date-picker
          type="date"
          placeholder="请选择日期"
          style="width: 100%;"
          v-model="form.departDate"
          @change="changeDate"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="返回时间" class="active">
        <!-- change 用户确认选择日期时触发 -->
        <el-date-picker
          type="date"
          placeholder="请选择日期"
          style="width: 100%;"
          v-model="form.departDate1"
          @change="changeDate"
          :picker-options="pickerOptions1"
          class="input"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </el-form-item>

      <div class="reverse">
        <span @click="reverseCity">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      radio: "1",
      currentTab: 0,
      form: {
        departCity: "",
        departCode: "",
        destCity: "",
        destCode: "",
        departDate: "",
        departDate1: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
  methods: {
    handleLabel() {
      var input_class = document.querySelectorAll(".el-form-item")[3];

      if (this.radio === "1") {
        input_class.className = "el-form-item active";
      }
    },
    handleLabel1() {
      var input_class = document.querySelectorAll(".el-form-item")[3];
      input_class.className = "el-form-item";
    },
    // 获取接口数据
    getCity(value, cb) {
      if (!value) return;
      axios({
        url: "http://157.122.54.189:9095/airs/city?name=" + value,
        methods: "GET"
      }).then(res => {
        // console.log(res.data);
        const { data } = res.data;

        // 给data每一项加上value
        const newData = data.map(v => {
          return {
            ...v,
            value: v.name.replace("市", "")
          };
        });
        //默认选择第一项

        this.form.destCode = newData[0].sort;
        // this.form.departCity = newData[0].value;
        this.form.destCity = newData[0].value;
        // console.log(newData[0]);
        cb(newData);
      });
    },
    //触发出发城市搜索建议
    //vlaue 是输入框的值
    //cb 是回调函数必须要执行 接收数组 数组内部必须是对象组件 对象必须有value属性
    queryDepartSearch(value, cb) {
      // cb([
      //   { value: "北京", id: 0 },
      //   { value: "广州", id: 1 },
      //   { value: "上海", id: 2 },
      //   { value: "深圳", id: 3 }
      // ]);
      this.getCity(value, cb);
    },
    //触发到达城市搜索建议
    queryDestSearch(value, cb) {
      this.getCity(value, cb);
    },
    // 出发城市下拉选择事件
    selectDepartCity(item) {
      // console.log(item);
      this.form.departCity = item.value;
      this.form.departCode = item.sort;
    },
    // 到达城市下拉选择事件
    selectDestCity(item) {
      // console.log(item);
      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },
    // 确认选择日期事件
    changeDate() {
      this.form.departDate1 = moment(this.form.departDate1).format(
        "YYYY-MM-DD"
      );
    },
    changeDate() {
      // 每当数据改变的时候我需要将当前 this.form.departDate
      // 的数据转换换为合适的格式
      // console.log(moment(this.form.departDate).format("YYYY-MM-DD"));
      this.form.departDate = moment(this.form.departDate).format("YYYY-MM-DD");
    },
    // 出发城市 到达城市切换事件
    reverseCity() {
      // 这里面需要做的事情是将出发地和到达地互换
      // this.form.departCity = this.form.destCity;
      // 如果这样子的话 那么数据就会丢失
      // 应该先创建临时变量储存
      // var destCity = this.form.destCity
      // var destCode = this.form.destCode
      // var departCity = this.form.departCity
      // var departCode = this.form.departCode
      // 可以使用解构的形式
      const { destCity, destCode, departCity, departCode } = this.form;
      // 然后两两互换
      this.form.destCity = departCity;
      this.form.destCode = departCode;
      this.form.departCity = destCity;
      this.form.departCode = destCode;
    },
    // 搜索事件
    handleSearch() {
      //   console.log(this.form);
      const rules = {
        // 出发城市
        depart: {
          value: this.form.departCity,
          message: "请输入出发城市"
        },
        // 到达城市
        dest: {
          value: this.form.destCity,
          message: "请输入到达城市"
        },
        // 出发日期
        departDate: {
          value: this.form.departDate,
          message: "请输入出发日期"
        }
        // // 返回日期
        // departDate1: {
        //   value: this.form.departDate1,
        //   message: "请输入返回日期"
        // }
      };
      //验证变量 默认为真
      let valid = true;
      Object.keys(rules).map(v => {
        // console.log(v);
        if (!valid) return;
        // 如果有一个数据不存在
        if (!rules[v].value) {
          this.$message.warning(rules[v].message);
          valid = false;
        }
        //   验证不通过返回
        if (!valid) return;
        this.$router.push({
          path: "/flights",
          query: this.form
        });
      });
    }
  }
};
</script>

<style scoped lang="less">
.active {
  pointer-events: none;
  opacity: 0.5;
}
.search-form {
  border: 2px #ddd solid;
  width: 360px;
  box-sizing: border-box;
}
.search-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 20px;
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>