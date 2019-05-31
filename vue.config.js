const path = require('path');
// function resolve(dir) {
//   return path.join(__dirname, '..', dir);
// }

module.exports = {
  devServer: {
    // 设置主机地址
    // host: 'localhost',
    // 设置默认端口
    // port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'https://music.niubishanshan.top',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['*', '.js', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
