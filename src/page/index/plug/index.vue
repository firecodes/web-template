<template>
  <div class="vui-block">
    <!--注册组件 -->
    <formInputTextarea />
  </div>
</template>

<script>

// import { addClass, removeClass, on, off } from 'element-ui/src/utils/dom';
import { on, off } from 'element-ui/src/utils/dom'
import { mapMutations } from 'vuex'

export default {
  components: { },
  data() {
    return {
    }
  },
  created() {
    document.title = 'sales plug'
    // 窗口设置 全局
    this.SET_WINPAGE(this.winPage)
    // 调用全局 过滤器
    // console.log('$utils.getAA()' + this.$utils.getAA())
    on(window, 'resize', this.setPageSize)
  },
  beforeDestroy() {
    off(window, 'resize', this.setPageSize)
  },
  methods: {
    ...mapMutations('env', ['SET_WINPAGE']),
    setPageSize(e) {
      // console.log(e)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-block{}
</style>
