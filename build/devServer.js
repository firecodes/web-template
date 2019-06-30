const port = 8888 // dev port

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
    [process.env.VUE_APP_BASE_API]: {
      target: `http://127.0.0.1:${port}/mock`,
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.VUE_APP_BASE_API]: ''
      }
    }
  },
  after: require('../mock/mock-server.js')
}

module.exports.devServer = devServer
