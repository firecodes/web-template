<template>
  <div class="app-footer">
    <el-avatar class="user-avatar" icon="el-icon-user-solid">user</el-avatar>
    <public-footer />
  </div>
</template>

<script>

import { publicFooter } from '@firecodes/vue-lui/packages'

export default {
  name: 'Footer',
  components: { publicFooter },
  mixins: [],
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-footer{
  width: 100%;
  margin: 0px auto;
}
</style>
