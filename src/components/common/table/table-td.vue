
<template>
  <td v-if="dataForm == 'text'">
    <span>{{ data }}</span>
  </td>

  <td v-else-if="dataForm == 'input'">
    <input
      type="number"
      min="1"
      :value="data"
    />
  </td>

  <td v-else-if="dataForm == 'button'">
    <button @click="this.$emit('click')">
      {{ data }}
    </button>
  </td>
</template>

<script>
export default {
  name: 'tableTd',
  props: {
    data: {
      type: String,
      required: true
    },
    dataForm: {
      type: String,
      required: true
    },
  },
};
</script>

