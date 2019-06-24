
import * as filters from '@/common/filters' // global filters

const utils = {
  getAA() {
    return 'AA'
  }
}

// 全局过滤器
Object.assign(utils, filters)
export default utils
