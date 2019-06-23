<template>
  <div class="vui-echart">
    <el-row :gutter="10">
      <el-col :span="4">
        <div ref="chart1" :style="{height:height,width:width}" />
        <div class="center">直通率</div>
      </el-col>
      <el-col :span="4">
        <div ref="chart2" :style="{height:height,width:width}" />
        <div class="center">NTF率</div>
      </el-col>
      <el-col :span="4">
        <div ref="chart3" :style="{height:height,width:width}" />
        <div class="center">达成率</div>
      </el-col>
      <el-col :span="6">
        <div ref="chart4" :style="{height:height,width:'100%'}" />
        <div class="center">故障曲线</div>
      </el-col>
      <el-col :span="6">
        <div ref="chart5" :style="{height:height,width:'100%'}" />
        <div class="center">故障问题分布</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { on, off } from 'element-ui/src/utils/dom'
import echartMV from './echartMV'
export default {
  components: {
  },
  data() {
    return {
      width: '100%',
      height: '250px'
    }
  },
  created() {
    this.echartMV = echartMV
    this.$nextTick(() => {
      this.initChart()
    })
  },
  mounted() {
    on(window, 'resize', this.setPageSize)
  },
  beforeDestroy() {
    off(window, 'resize', this.setPageSize)
    // 销毁echarts 组件
    const chartGroup = [this.chart1, this.chart2, this.chart3, this.chart4, this.chart5]
    chartGroup.forEach((item) => {
      if (item) {
        item.dispose()
        item = null
      }
    })
  },
  methods: {
    initChart() {
      const option1 = this.echartMV.module.oneEchart.getOption()
      this.chart1 = this.$echarts.init(this.$refs.chart1)
      this.chart1.setOption(option1)
      const option2 = this.echartMV.module.twoEchart.getOption()
      this.chart2 = this.$echarts.init(this.$refs.chart2)
      this.chart2.setOption(option2)
      const option3 = this.echartMV.module.threeEchart.getOption()
      this.chart3 = this.$echarts.init(this.$refs.chart3)
      this.chart3.setOption(option3)
      const option4 = this.echartMV.module.fourEchart.getOption()
      this.chart4 = this.$echarts.init(this.$refs.chart4)
      this.chart4.setOption(option4)
      const option5 = this.echartMV.module.fiveEchart.getOption()
      this.chart5 = this.$echarts.init(this.$refs.chart5)
      this.chart5.setOption(option5)
    },
    setPageSize(e) {
      console.log('echarts --- setPageSize:' + e)
      // 销毁echarts 组件
      const chartGroup = [this.chart1, this.chart2, this.chart3, this.chart4, this.chart5]
      chartGroup.forEach((item) => {
        if (item) {
          item.resize()
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vui-echart{
  min-height: 300px;
}
</style>
