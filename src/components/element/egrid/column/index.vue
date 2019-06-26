<template>
  <span class="el-table-th-label">
    {{ column.label }}
  </span>
</template>

<script>
export default {
  components: {},
  props: {
    column: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

