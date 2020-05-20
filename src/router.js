/*
 * @Description:
 * @Author: zhangyuhao
 * @Date: 2020-04-17 16:05:22
 * @LastEditTime: 2020-05-20 17:52:27
 * @LastEdiors: zhangyuhao
 */

import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue';

// const login = (r) =>
//   require.ensure([], () => r(require("@/views/login/login")), "login");

// const home = (r) =>
//   require.ensure([], () => r(require("@/views/home")), "home");

// const ranking = (r) =>
//   require.ensure([], () => r(require("@/views/ranking")), "ranking");

const liveActive = (r) =>
  require.ensure([], () => r(require("@/views/active")), "liveActive");

const ruleInfo = (r) =>
  require.ensure([], () => r(require("@/views/active/ruleInfo")), "ruleInfo");

// const drop = (r) =>
//   require.ensure([], () => r(require("@/views/drop")), "drop");

Vue.use(Router);

export default new Router({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/liveActive",
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login,
    // },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: home,
    // },
    // {
    //   path: "/ranking",
    //   name: "ranking",
    //   component: ranking,
    // },
    {
      path: "/liveActive",
      name: "liveActive",
      component: liveActive,
    },
    {
      path: "/ruleInfo",
      name: "ruleInfo",
      component: ruleInfo,
    },
    // {
    //   path: "/drop",
    //   name: "drop",
    //   component: drop,
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: layout,
    //   // redirect: { name: 'default' },
    //   children: [
    //     {
    //       path: '/option',
    //       name: 'option',
    //       component: option,
    //     },
    //     {
    //       path: '/default',
    //       name: 'default',
    //       component: defaultComp,
    //     },
    //   ],
    // },
    {
      path: "*",
      redirect: "/ranking",
    },
  ],
});
