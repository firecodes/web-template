import Vue from 'vue'
import store from '@/store'
import Cookies from 'js-cookie'

import Element from 'element-ui'
import Egrid from '@/components/element/egrid/src'
import echarts from 'echarts'

import API from '@/api/index'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css

// import '@/icons' // icons
// import './permission' // permission control

import * as filters from '@/filters' // global filters

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

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.use(Egrid)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.$echarts = echarts

const main = {
  init(config) {
    this.runApp(config)
  },
  runApp(config) {
    new Vue({
      el: '#app',
      store,
      router: config.router,
      render: (h) => h(config.App)
    })
  }
}
export default main
