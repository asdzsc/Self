<template>
  <!-- 1.自定义组件 -->
  <!-- 把props中的src看成是 data中的变量一样来使用 -->
  <img @click="handleClick" class="img-border" :src="src" alt />
</template>

<script>
export default {
  // 父传子通过props接受数据
  props: {
    src: String
  },
  methods: {
    handleClick() {
      //子传父 传递数据 通过触发事件
      // this.$emit('自定义事件名','要传递的参数’)
      this.$emit("srcChange", this.src);
    }
  }
};
//
</script>

<style>
.img-border {
  border-radius: 50%;
}
</style>  