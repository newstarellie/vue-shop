
<template>
  <thead>
    <tr>
      <th v-for="column in tableColumn"
        :key="column"
        :style="{ width: column.width }">
        {{column.label }}
      </th>
    </tr>
    <!-- {{ tableColumn }} -->
  </thead>
</template>

<script>
export default {
  name: 'tableHead',
  props: {
    tableColumn: {
      type: Array,
      required: true
    },
  },
};
</script>

