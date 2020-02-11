module.exports = {
  devServer: {
    port: 8110, // 端口号
    proxy: { // 跨域代理
      '/api': {
        target: 'http://localhost:8111',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
