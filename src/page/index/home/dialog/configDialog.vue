<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="800"
    :modal="true"
    :close-on-click-modal="false"
    :append-to-body="true"
    :modal-append-to-body="true"
    :lock-scroll="true"
  >
    <span>这是一段信息</span>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">确 定</el-button>
      <el-button @click="close">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  components: {},
  props: {
    visible: Boolean,
    op: {
      type: Object,
      default() {
        return {
          visible: false,
          data: {},
          callbcakSave() {},
          callbackClose() {}
        }
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    'visible'(value) {
      this.dialogVisible = value
    },
    dialogVisible(value) {
      if (value) {
        this.open()
      } else {
        this.$emit('visible.sync', false)
      }
    }
  },
  created() {},
  methods: {
    open() {
      const op = this.op
      console.log('configDialog:' + op)
    },
    save() {
      if (this.op) {
        const data = { b: 11 }
        this.op.callbcakSave(data)
      }
      this.close()
    },
    close() {
      this.dialogVisible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
