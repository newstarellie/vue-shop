<template>
  <div class="container">
    <carousel :items-to-show="1"
      :transition="2000"
      :infinite="true"
      :autoplay="true">
      <slide v-for="slide in 3"
        :key="slide">
        <div class="slide-content">
          {{ slide }}
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

export default {
  name: 'AboutUsPage',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  created() {

  },
  computed: {

  },
  methods: {
  }
}
</script>
<style scoped>
.slide-content {
  height: 100px;
  width: 100px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>