
<template>
  <td v-if="dataForm == 'text'">
    <span>{{ data }}</span>
  </td>

  <td v-else-if="dataForm == 'input'">
    <input type="number"
      min="1"
      v-model="dataNumber"
      @change="this.$emit('changeValue',dataNumber)" />
  </td>

  <td v-else-if="dataForm == 'button'">
    <button>
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
  data() {
    return {
      dataNumber: 0,
    }
  },
  created() {
    this.dataNumber = this.data;
  },
};
</script>

