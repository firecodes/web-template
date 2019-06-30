
let port = 8888 // dev port
let env="dev" //  dev/www/product  ---各种环境配置
let webHost = `http://127.0.0.1:${port}/mock`
let wwwHost = 'http://www.hh.com'
if(env === 'www'){
  webHost = 'http://www.abc.com'
}
let BASE_API = process.env.VUE_APP_BASE_API
console.log('process.env.VUE_APP_BASE_API:-----BASE_API:'+BASE_API)

let devServer =  {
  port: port,
  // open: true,
  overlay: {
    warnings: false,
    errors: true
  },
  proxy: {
    // change xxx-api/login => mock/login
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    ['/dev-api']: { // [BASE_API]
      target: webHost,
      changeOrigin: true,
      pathRewrite: {
        ['^/dev-api']: '' // ['^/' + BASE_API]
      }
    },
    ['/dev-www']: {
      target: wwwHost,
      changeOrigin: true,
      pathRewrite: {
        ['^/dev-www']: ''
      }
    }
  },
  after: require('../mock/mock-server.js')
}

module.exports.devServer = devServer
