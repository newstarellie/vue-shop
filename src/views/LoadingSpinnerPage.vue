<template>
  <div class="container">
    <LoadingSpinner />
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: 'LoadingSpinnerPage',
  components: {
    LoadingSpinner,
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  padding: 50px;
}
</style>
