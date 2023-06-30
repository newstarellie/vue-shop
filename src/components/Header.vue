<template>
  <header>
    <h1 class="mallLogo">
      <a href="#"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
        title="買買買商城">
        <img :src="logoIsHovered ? hoverImageUrl : defaultImageUrl"
          alt="買買買商城logo" />
        <span>買買買商城</span>

      </a>
    </h1>

    <div class="mallSearch">
      <form @submit.prevent="searchItems"
        novalidate>
        <input type="text"
          name="title"
          v-model="searchQuery"
          required
          autocomplete="off"
          placeholder="请输入需要的商品">

        <button type="submit">
          <span class="sr-only">搜尋</span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>

      </form>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeaderComponent',
  data() {
    return {
      logoIsHovered: false,
      defaultImageUrl: require('@/assets/mall-logo-default.svg'),
      hoverImageUrl: require('@/assets/mall-logo-hover.svg'),
      searchQuery: '',

    };
  },
  methods: {
    handleMouseOver() {
      this.logoIsHovered = true;
      console.log(this.logoIsHovered)
    },
    handleMouseOut() {
      this.logoIsHovered = false;
    },
    searchItems() {
      this.$store.dispatch('searchItems', this.searchQuery)
        .then(() => {
          this.searchQuery = '';
          this.$router.push('/searchingResult');
        })
        .catch(error => {
          console.error('搜索出错:', error);
        });

      console.log('搜索关键字:', this.searchQuery);
    }
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

h1.mallLogo {
  min-width: 100px;
  max-width: 500px;

  min-height: 50px;
  max-height: 100px;

  a {
    display: flex;
    height: 100%;

    img {
      height: 50px;
    }
  }

}

.mallSearch {
  width: 500px;

  // TODO 這些可以整理進去scss模組 
  form {
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: $input-border-color 1px solid;

    input {
      width: 100%;
      background-color: $input-background-color;
      text-align: left;

    }

    button {
      height: 100%;

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

    }
  }
}
</style>
