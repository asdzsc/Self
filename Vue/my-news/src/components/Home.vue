<template>
  <div id="app">
    <div class="topbar">
      <img class="menu" src="../assets/menu.png" alt />
      <span>今天</span>
      <img class="tixing" src="../assets/tixing.png" alt />
      <img class="more" src="../assets/more.png" alt />
    </div>
    <div class="carsoule swiper-container" ref="carsoule">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide item"
          v-for="(item, id) in topStories"
          :key="id"
        >
          <img :src="item.image" alt />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="hotStory">
      <ul>
        <li v-for="(item, id) in hotStories" :key="id">
          <span>{{ item.title }}</span>
          <img :src="item.images" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hotStories: [],
      topStories: [],
    };
  },
  mounted() {
    this.axios.get("/js/api/4/news/latest").then((res) => {
      this.hotStories = res.data.stories;
      this.topStories = res.data.top_stories;
      this.$nextTick(() => {
        new Swiper(this.$refs.carsoule, {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  position: relative;
  background: #00a2ed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  span {
    font-size: 20px;
    position: absolute;
    left: 50px;
    color: #fff;
  }
  img {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
  }
  .menu {
    left: 10px;
  }
  .tixing {
    right: 70px;
  }
  .more {
    right: 10px;
  }
}
.carsoule {
  font-size: 18px;
  p {
    color: #fff;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .item {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.hotStory {
  font-size: 18px;
  margin-top: 10px;
  li {
    height: 100px;
    width: 95%;
    margin: 10px;
    box-shadow: 0 0 10px 0 #808080;
    display: flex;
    span {
      flex: 2.5;
      padding: 20px;
      box-sizing: border-box;
    }
    img {
      flex: 1;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
