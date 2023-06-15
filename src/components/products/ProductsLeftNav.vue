<template>
  <div class="left-nav">
    <div class="title">所有分类</div>
    <div class="list-box">
      <dl v-for="category in categories"
        :key="category.title"
        :class="{ 'open': category.open }"
        class="accordion">
        <dt @click="toggleAccordion(category)">{{ category.title }}</dt>
        <dd v-for="item in category.items"
          :key="item">{{ item }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsLeftNav',
  data() {
    return {
      categories: [
        {
          title: '奶粉輔食',
          items: ['進口奶粉', '寶寶輔食', '營養品'],
          open: false
        },
        {
          title: '兒童用品',
          items: ['紙尿褲', '嬰兒濕巾', '嬰兒車', '嬰兒床', '兒童安全座椅'],
          open: false
        },
        {
          title: '兒童早教',
          items: ['兒童玩具', '早教書籍', '孕產育兒書'],
          open: false
        },
        {
          title: '兒童服飾',
          items: ['童裝', '童鞋', '寶寶配飾'],
          open: false
        },
        {
          title: '孕媽專區',
          items: ['孕婦裝', '孕婦護膚', '孕婦用品'],
          open: false
        }
      ]
    };
  },
  methods: {
    toggleAccordion(category) {
      category.open = !category.open;
      console.log(category);
    }
  }
};
</script>

<style lang="scss">
.left-nav {
  min-width: 150px;
  width: 20%;
  border: $secondary-color 2px solid;
  background-color: $tertiary-color;

  .title {
    background-color: $secondary-color;
  }
}

dl.accordion dt {
  cursor: pointer;
}

dl.accordion dd {
  display: none;
  transition: height 0.3s;
  overflow: hidden;
  height: 0;
}

dl.accordion.open dd {
  display: block;
  height: auto;
}
</style>