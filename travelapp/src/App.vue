<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Foot />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Foot from "@/components/Foot.vue";
export default {
  components: {
    Header,
    Foot
  }
};
</script>
<style lang="less">
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
}
ul,
li,
ol {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
em,
i {
  font-style: normal;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
