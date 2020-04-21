const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, '..', dir);
// }

const autoprefixer = require("autoprefixer"); // 用于配置不同浏览器css前缀
const pxtorem = require("postcss-pxtorem");

module.exports = {
  devServer: {
    // 设置主机地址
    // host: 'localhost',
    // 设置默认端口
    // port: 8080,
    // 设置代理
    proxy: {
      "/api": {
        // 目标 API 地址
        target: "http://livetest.inlive.net.cn",
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ["*", ".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(), // 用于配置不同浏览器css前缀
          pxtorem({
            rootValue: 37.5, // 根据设计图尺寸/10，如设计图为750px 则为75 ***不同值会调整第三方ui框架默认尺寸
            propList: ["*"],
          }),
        ],
      },
    },
  },
};
