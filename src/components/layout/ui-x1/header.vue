<template>
  <div class="app-header">
    <div class="app-logo" />
    <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
  },
  methods: {
    handleSelect() {}
  }
}
</script>

<style lang="scss" scoped>
.app-header{
  width: 1200px ;
  margin: 0px auto;
  .app-logo{
    width: 200px;
  }
  .app-menu{
    width: 800px;
  }
}
</style>
