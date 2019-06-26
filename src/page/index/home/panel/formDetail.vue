<template>
  <el-form ref="form" label-width="160px" class="vui-form">
    <el-row class="mb10">
      <el-col :span="22" class="vui-title center">
        A95线生产管理电子看板
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <el-form-item label="产品名称">
          <a class="" @click="openConfigDialog">openConfigDialog</a>
        </el-form-item>
        <el-form-item label="工单号">
          <a class="">111</a>
        </el-form-item>
        <el-form-item label="预计完成时间">
          <a class="">111</a>
        </el-form-item>
        <el-form-item label="工单数量">
          <a class="">111</a>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <el-form-item label="生产班组">
          <a class="">111</a>
        </el-form-item>
        <el-form-item label="生产负责人">
          <a class="">111</a>
        </el-form-item>
        <el-form-item label="工程负责人">
          <a class="">111</a>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <egrid stripe max-height="300" :data="grid.data" :columns="grid.columns" :op="grid" :show-header="false" :empty-text="''">
          <template slot="address" slot-scope="scope">
            {{ scope.row.address }}+'999'
          </template>
        </egrid>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      grid: {
        // showPage: true, // 是否显示分页
        columns: [{ prop: 'address', label: 'address', template: 'address', 'min-width': 200, 'show-overflow-tooltip': true }],
        data: [{
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },
  computed: {
    ...mapGetters(['winPage'])
  },
  created() {
  },
  methods: {
    openConfigDialog() {
      var configDialog = this.winPage.configDialog
      configDialog.visible = true
      configDialog.data = { a: 'aa' }
      configDialog.callbcakSave = function(data) {
        console.log('callbcakSave:' + data)
      }
      configDialog.callbackClose = function(data) {
        console.log('callbackClose:' + data)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-form{
  .vui-title{
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
