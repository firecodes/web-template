<template>
  <div class="vui-panel">
    <egrid
      ref="grid"
      :data="gridOp.data"
      :columns="gridOp.columns"
      :max-height="400"
      :op="gridOp"
      highlight-current-row
      style="min-height: 200px;"
      :column-type="['index']"
      @serach="serachGrid"
    >
      <template slot="id" slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
      <template slot="timestamp" slot-scope="scope">
        <span>{{ scope.row.timestamp }}</span>
      </template>
      <template slot="author" slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
      <template slot="importance" slot-scope="scope">
        <span>{{ scope.row.status }}</span>
      </template>
      <template slot="statu" slot-scope="scope">
        <el-tag :type="scope.row.status">
          {{ scope.row.status }}
        </el-tag>
      </template>
      <template slot="title" slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </egrid>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      gridOp: {
        showPage: true,
        data: [],
        columns: [
          { prop: 'id', label: 'ID', width: 80, template: 'id', 'show-overflow-tooltip': true },
          { prop: 'timestamp', label: 'Date', 'min-width': 180, template: 'timestamp', 'show-overflow-tooltip': true },
          { prop: 'author', label: 'Author', 'min-width': 120, template: 'author', 'show-overflow-tooltip': true },
          { prop: 'importance', label: 'Importance', 'min-width': 180, template: 'importance', 'show-overflow-tooltip': true },
          { prop: 'statu', label: 'Status', 'min-width': 180, template: 'statu', 'show-overflow-tooltip': true },
          { prop: 'title', label: 'Title', 'min-width': 180, template: 'title', 'show-overflow-tooltip': true }
        ]
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.serachGrid()
    })
  },
  methods: {
    serachGrid() {
      const scope = this
      const { grid } = scope.$refs
      const pageVO = grid.pagerOp.pageVO
      grid.loading = true
      scope.API.mock.fetchList({ a: '111', pageVO }, function(success, data) {
        grid.loading = false
        if (success) {
          scope.gridOp.data = data.items
          pageVO.total = data.total
          // Object.assign(pageVO, )
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-panel{
}
</style>
