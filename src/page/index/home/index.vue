<template>
  <div class="vui-block">
    <main-panel />
  </div>
</template>

<script>

// import { addClass, removeClass, on, off } from 'element-ui/src/utils/dom';
import { on, off } from 'element-ui/src/utils/dom'
import { mapMutations } from 'vuex'
import panel from './panel/index'

export default {
  components: {
    mainPanel: panel
  },
  data() {
    return {
      winPage: {}
    }
  },
  created() {
    document.title = 'sales product'
    // 窗口设置 全局
    // this.SET_WINPAGE(this.winPage)
    on(window, 'resize', this.setPageSize)
  },
  beforeDestroy() {
    off(window, 'resize', this.setPageSize)
  },
  methods: {
    ...mapMutations(['SET_WINPAGE']),
    setPageSize(e) {
      console.log(e)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-block{}
</style>
