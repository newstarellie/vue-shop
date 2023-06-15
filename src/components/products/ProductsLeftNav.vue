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
          :key="item.id"
          :class="item.selectedItem"
          @click="selectedItem(item)">
          {{ item.name }}
        </dd>
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
          items: [
            { id: 'imported-milk-powder', name: '進口奶粉', selectedItem: null },
            { id: 'baby-food', name: '寶寶輔食', selectedItem: null },
            { id: 'nutritional-products', name: '營養品', selectedItem: null },
          ],
          open: false,
        },
        {
          title: '兒童用品',
          items: [
            { id: 'diapers', name: '紙尿褲', selectedItem: null },
            { id: 'baby-wipes', name: '嬰兒濕巾', selectedItem: null },
            { id: 'baby-stroller', name: '嬰兒車', selectedItem: null },
            { id: 'baby-crib', name: '嬰兒床', selectedItem: null },
            { id: 'child-safety-seat', name: '兒童安全座椅', selectedItem: null },
          ],
          open: false,
        },
        {
          title: '兒童早教',
          items: [
            { id: 'children-toys', name: '兒童玩具', selectedItem: null },
            { id: 'early-education-books', name: '早教書籍', selectedItem: null },
            { id: 'pregnancy-childbirth-parenting-books', name: '孕產育兒書', selectedItem: null },
          ],
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(category) {
      category.open = !category.open;
    },
    selectedItem(item) {
      for (const category of this.categories) {
        for (const item of category.items) {
          item.selectedItem = '';
        }
      }
      item.selectedItem = 'selected';
      this.$store.dispatch('selectCategory', item)

    },
  },
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

.selected {
  color: red; // 设置选中项的文字颜色
}
</style>
