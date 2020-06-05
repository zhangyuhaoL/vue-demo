/*
 * @Description:
 * @Author: zhangyuhao
 * @Date: 2020-04-17 16:05:22
 * @LastEditTime: 2020-06-05 11:16:40
 * @LastEdiors: zhangyuhao
 */

import Vue from "vue";
import Router from "vue-router";

const defaultPage = (r) =>
  require.ensure([], () => r(require("@/views/default")), "default");

Vue.use(Router);

export default new Router({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/default",
    },
    {
      path: "/default",
      name: "default",
      component: defaultPage,
    },
    {
      path: "*",
      redirect: "/default",
    },
  ],
});
