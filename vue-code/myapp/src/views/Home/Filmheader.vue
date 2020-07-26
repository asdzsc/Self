<template>
  <div>
    <ul>
      <router-link to="./Nowplaying" tag="li" activeClass="active">正在热映</router-link>
      <router-link to="./Comingsoon" tag="li" activeClass="active">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 3px solid #ff5f16;
  color: #ff5f16;
}
ul {
  display: flex;
  li {
    flex: 1;
    height: 40px;
    text-align: center;
    line-height: 40px;
    list-style: none;
  }
}
.fixed {
  position: fixed;
  height: 40px;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
}
</style>