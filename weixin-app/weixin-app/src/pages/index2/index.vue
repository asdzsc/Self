<template>
  <view class="content">
    <view>{{ msg }}</view>
    <view>{{ money }}</view>
    <view>{{ isRich }}</view>
    <view>{{ person.name }}</view>
    <view>{{ person.skill }}</view>

    <!-- 在标签上  通过某种属性的方式使用数据 -->
    <view :data-color="color">color</view>

    <view>=============</view>
    <view v-for="(item,index) in list" :key="item.id">
      {{ item.id }}--
      {{ item.text }}
      {{ index }}
    </view>
    <view>----------</view>
    <view v-if="false">v-if</view>
    <view v-show="false">v-show</view>

    <view>
      <view>￥{{ Money }}</view>
      <view>{{ cnMoney }}</view>
      <view v-for=" (item) in filterList" :key="item.id">
        {{ item.text }}
        {{ item.id }}
      </view>
    </view>
    <!-- 事件监听 -->
    <view @click="handleClick">点我试试</view>
    <!-- 定义事件回调 -->
    <view data-index="11" @click="handleClick1(1,$event)">点我试试1</view>
    <view data-index="22" @click="handleClick1(2,$event)">点我试试2</view>
  </view>
</template>

<script>
export default {
  //data 定义数据
  data() {
    return {
      //数据
      msg: "黑马程序员",
      //数字
      money: 10000,
      //布尔值
      isRich: false,
      //对象
      person: {
        name: "孙悟空",
        skill: "72变"
      },
      // 颜色
      color: "aqua",
      //数组
      list: [
        {
          id: 0,
          text: "🍎"
        },
        {
          id: 1,
          text: "🍌"
        },
        {
          id: 2,
          text: "🍒"
        }
      ]
    };
  },
  //计算属性
  computed: {
    cnMoney() {
      // ￥10000
      return "￥" + this.money;
    },
    filterList() {
      return this.list.filter(v => v.id <= 0);
    }
  },
  methods: {
    handleClick() {
      console.log("我是点击触发的😭");
    },
    handleClick1(index, event) {
      // console.log("我是点击触发的😭");
      console.log(index);
      console.log(event);
      console.log(event.currentTarget.dataset.index);
    }
  }
};
</script>

<style lang="scss">
</style>


