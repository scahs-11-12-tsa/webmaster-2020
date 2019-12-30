module.exports = {
  chainWebpack: config => {
    config.devtool('source-map')
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
    progress: false
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/global.scss";`,
        sourceMap: true
      }
    }
  }
}
