<template>
  <div class="vui-panel">
    <formDetail />
    <echartDetail />
  </div>
</template>

<script>
import formDetail from './formDetail'
import echartDetail from './echartDetail'
export default {
  components: {
    formDetail,
    echartDetail
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
