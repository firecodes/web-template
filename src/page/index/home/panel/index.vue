<template>
  <div class="vui-panel">
    <formDetail />
    <echartDetail />
    <searchGrid />
  </div>
</template>

<script>
import formDetail from './formDetail'
import echartDetail from './echartDetail'
import searchGrid from './searchGrid'
export default {
  components: {
    formDetail,
    echartDetail,
    searchGrid
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

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-panel{
}
</style>
