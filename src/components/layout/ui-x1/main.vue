<template>
  <el-main class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key" />
    </transition>
  </el-main>
</template>

<script>

export default {
  name: 'Main',
  components: {},
  mixins: [],
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + new Date()
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-main{
  width: 1200px;
  margin: 0px auto;
  position: relative;
  padding-top: 70px;
}
</style>
