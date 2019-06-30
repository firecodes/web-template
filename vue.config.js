'use strict'
const path = require('path')
const multPage = require('./build/page.js')
const devServer = require('./build/devServer.js')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProduct = !(process.env.NODE_ENV === 'development')
const name = defaultSettings.title || 'sales' // page title

module.exports = {
  publicPath: (isProduct ? '/web-template/' : ''),
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: !isProduct,
  productionSourceMap: false,
  devServer: devServer.devServer, //  端口， 跨域配置
  pages: multPage.pages, // 多页面s
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@store': resolve('src/store'),
        '@page': resolve('src/page')
      }
    }
  },
  chainWebpack(config) {
    // config.plugins.delete('preload') // TODO: need test
    // config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    // https://webpack.js.org/configuration/devtool/#development
    config.when(!isProduct, config => config.devtool('cheap-source-map'))
    config.when(isProduct, config => {
      // config.plugin('ScriptExtHtmlWebpackPlugin')
      //   .after('html')
      //   .use('script-ext-html-webpack-plugin', [{
      //   // `runtime` must same as runtimeChunk name. default is `runtime`
      //     inline: /runtime\..*\.js$/
      //   }])
      //   .end()
      //  config.optimization.runtimeChunk('single')
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
    }
    )
  }
}
