const echartMV = {}
echartMV.stitic = {}
echartMV.view = {}
echartMV.module = {}
echartMV.model = {}

echartMV.module.oneEchart = {
  getOption() {
    const dataStyle = {
      normal: {
        label: { show: false },
        labelLine: { show: false }
      }
    }
    const placeHolderStyle = {
      normal: {
        color: 'rgba(0,0,0,0)',
        label: { show: false },
        labelLine: { show: false }
      },
      emphasis: {
        color: 'rgba(0,0,0,0)'
      }
    }
    const options = {
      title: {
        text: '90%',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle: {
          color: 'rgba(30,144,255,0.8)',
          fontFamily: '微软雅黑',
          fontSize: 35,
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: false },
          dataView: { show: false, readOnly: false },
          restore: { show: false },
          saveAsImage: { show: false }
        }
      },
      series: [{
        name: '直通率',
        type: 'pie',
        radius: [50, 65],
        itemStyle: dataStyle,
        data: [
          { value: 90, name: '达标率' },
          { value: 10, name: '不达率', itemStyle: placeHolderStyle }
        ]
      }]
    }
    return options
  }
}

echartMV.module.twoEchart = {
  getOption() {
    const options = {
      title: {
        text: '90%',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle: {
          color: 'rgba(30,144,255,0.8)',
          fontFamily: '微软雅黑',
          fontSize: 35,
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '直通率',
        type: 'pie',
        radius: [50, 65],
        data: [
          { value: 90, name: '达标率' },
          { value: 10, name: '不达率' }
        ]
      }]
    }
    return options
  }
}

echartMV.module.threeEchart = {
  getOption() {
    const options = {
      title: {
        text: '90%',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle: {
          color: 'rgba(30,144,255,0.8)',
          fontFamily: '微软雅黑',
          fontSize: 35,
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [{
        name: '直通率',
        type: 'pie',
        radius: [50, 65],
        data: [
          { value: 90, name: '达标率' },
          { value: 10, name: '不达率' }
        ]
      }]
    }
    return options
  }
}

echartMV.module.fourEchart = {
  getOption() {
    const options = {
      title: { text: '', x: 'center' },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [{
        type: 'category',
        splitLine: { show: false },
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
      }],
      yAxis: [{ type: 'log' }],
      grid: {
        left: '3%',
        right: '5%',
        bottom: '2%',
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true }
        }
      },
      series: [{
        name: '3的指数',
        type: 'line',
        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
      }, {
        name: '2的指数',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
      }]
    }
    return options
  }
}

echartMV.module.fiveEchart = {
  getOption() {
    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center'
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{ type: 'value' }],
      series: [{
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: '其他',
        type: 'bar',
        stack: '搜索引擎',
        data: [62, 82, 91, 84, 109, 110, 120]
      }]
    }
    return options
  }
}

export default echartMV
