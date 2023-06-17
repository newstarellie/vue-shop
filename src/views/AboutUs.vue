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
</style>