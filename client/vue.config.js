const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
  outputDir: '../server/app/public',
  productionSourceMap: true,
  devServer: {
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        },
        secure: false
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress[
        'drop_console'
      ] = true
      config.optimization.minimizer[0].options.terserOptions.compress[
        'drop_debugger'
      ] = true
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap(args => {
        args[0].filename = path.resolve(
          __dirname,
          '../server/app/view/index.html'
        )
        return args
      })
    } else {
      // mutate for development...
    }
  }
}
