<template>
  <div>
    user
    <ul>
      <li v-for="item in list" @click="handleClick(item)" :key="item">{{item}}</li>
    </ul>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:["1111","2222","333"],
      value: new Date()
    }
 
  },
  methods:{
    handleClick(id){
      // console.log(item);
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
