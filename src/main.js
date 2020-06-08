/*
 * @Description: main.js
 * @Author: zhangyuhao
 * @Date: 2020-06-05 11:11:34
 * @LastEditTime: 2020-06-08 12:02:48
 * @LastEdiors: zhangyuhao
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import reportData from "./mixins/reportData";

// import "./assets/icon/iconfont.css";
import "./assets/fonts/common.css";

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import "normalize.css";
import http from "./config/http";
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.mixin(reportData);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
