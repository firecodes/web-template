
import * as filters from '@/common/filters' // global filters
import * as common from './common' // global filters

const utils = {
  getAA() {
    return 'AA'
  }
}

// 全局过滤器
Object.assign(utils, common, filters)

export default utils
