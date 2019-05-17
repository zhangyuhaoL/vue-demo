const path = require('path');
// function resolve(dir) {
//   return path.join(__dirname, '..', dir);
// }

module.exports = {
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
