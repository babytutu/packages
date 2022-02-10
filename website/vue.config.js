const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 选项...
  outputDir: 'dist', // 修改打包输出目录
  assetsDir: 'static',
  devServer: {
    port: 5555 // 默认端口号
  },
  /**
   * 开启vscode调试
   * @see https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html
   */
  configureWebpack: {
    devtool: 'source-map'
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    // 增加别名，默认src目录对应@
    config.resolve.alias
      .set('static', resolve('public/static'))
      .set('src', resolve('src'))
      .set('@pkg', resolve('../packages'))

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },
  publicPath: './'
}
