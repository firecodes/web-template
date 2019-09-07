import Vue from 'vue'
import store from '@/store'
import i18n from '@/i18n' // 国际化

// 登录请求认证，获取用户信息，频道用户是否已登录
const login = {
  init(config, callback) {
    callback()
  }
}

const main = {
  init(config) {
    const scope = this
    login.init(config, function() {
      scope.runApp(config)
    })
  },
  runApp(config) {
    Promise.all([
      new Promise((resolve, reject) => {
        // 组件注册写在APP， 避免全加载
        resolve(import('./init-app'))
      })
    ]).then((r) => {
      new Vue({
        el: '#app',
        store,
        i18n,
        router: config.router,
        render: (h) => h(config.App)
      })
    })
  }
}
export default main
