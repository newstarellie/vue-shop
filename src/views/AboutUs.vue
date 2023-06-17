<template>
  <div class="container">
    <carousel :items-to-show="1"
      :transition="3000"
      :wrapAround="true"
      :snapAlign="center"
      :autoplay="true">
      <slide v-for="slide in bannerList"
        :key="slide">
        <div class="slide-content">
          <img :src="slide.path"
            alt="slide-picture">
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>

  <div class="brief-content">
    <div class="container">
      <div class="img-box">
        <img alt="brief-content-img"
          src="../assets/home/brief-content-2.jpg">
        <img class="top"
          alt="brief-content-img"
          src="../assets/home/brief-content-1.jpg">
      </div>
      <div class="text">
        <p>
          我们的母婴产业2016年涉足母婴行业，以品牌经销为主，在强大市场的推动下，于2016年创立自己的独立品牌。公司立足于江西南昌，2年的品牌沉淀和运营经验让我们在行业中获得良好的口碑和市场份额。以直营+连锁加盟模式，让成功可复制，成为越来越多中小投资者的优选项目，更多的妈妈青睐我们的产品。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import banner1 from '../assets/home/banner1.jpg';
import banner2 from '../assets/home/banner2.png';
import banner3 from '../assets/home/banner3.jpg';



export default {
  name: 'AboutUsPage',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      bannerList: [
        {
          path: banner1,
          index: 1,
        },
        {
          path: banner2,
          index: 2,
        },
        {
          path: banner3,
          index: 3,
        },
      ]
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.slide-content {
  height: 450px;
  width: 100%;
  background-color: $primary-color;

  img {
    height: 100%;
  }
}

.brief-content {
  background-color: $background-secondary-color;
  height: 800px;

  .container {
    display: flex;
    align-items: center;
    height: 100%;

    .img-box {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: start;
      justify-content: start;
      position: relative;

      .top {
        position: absolute;
        bottom: 0;
        right: 0;
      }

    }

    .text {
      width: 50%;
    }
  }


}
</style>