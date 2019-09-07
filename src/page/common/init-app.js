
import Vue from 'vue'

import Cookies from 'js-cookie'
//  组件初始化
import axios from 'axios'
import VueAxios from 'vue-axios'

import VXEUtils from 'vxe-utils'
import XEUtils from 'xe-utils'
import utils from '@/common/utils'

import Element from 'element-ui'
import Egrid from '@/components/element/egrid/src'
import echarts from 'echarts'

import API from '@/api/index'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css

// 自定义指令
import '@/common/directive/index'

// import '@/icons' // icons
// import './permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '@/mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }
window.Vue = Vue
Vue.use(VueAxios, axios)

Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
Vue.use(Egrid)

// 自定义
Vue.use(VXEUtils, XEUtils, { mounts: ['cookie'] })
XEUtils.mixin(utils)

// 封装全局组件
import formInputTextarea from '@/components/element/form/input-textarea'
Vue.component('formInputTextarea', formInputTextarea)
// 注册全局组件，改为预加载，界面初始化用到就加载
// Vue.component('formInputTextarea', function(resolve) {
//   resolve(['@/components/element/form/input-textarea/index'])
// })

Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.$echarts = echarts

const app = {
  init(config) {
    return { a: 1 }
  }
}
export default app
