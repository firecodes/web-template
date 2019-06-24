<template>
  <div class="vui-block">
    <main-panel />

    <!--所有 窗口界面 -->
    <configDialog :visible.sync="winPage.configDialog.visible" :op="winPage.configDialog" />
  </div>
</template>

<script>

// import { addClass, removeClass, on, off } from 'element-ui/src/utils/dom';
import { on, off } from 'element-ui/src/utils/dom'
import { mapMutations } from 'vuex'
import panel from './panel/index'

// 所有窗口界面
import configDialog from './dialog/configDialog'

export default {
  components: {
    mainPanel: panel,
    configDialog
  },
  data() {
    return {
      winPage: {
        configDialog: {
          visible: false,
          data: {},
          callbcakSave() {},
          callbackClose() {}
        }
      }
    }
  },
  created() {
    document.title = 'sales product'
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
