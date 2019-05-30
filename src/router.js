import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

const login = r =>
  require.ensure([], () => r(require('@/views/login/login')), 'login');

// const charts = r =>
//   require.ensure([], () => r(require('@/views/charts/index')), 'charts');

const option = r =>
  require.ensure([], () => r(require('@/views/option/index')), 'option');

const layout = r =>
  require.ensure([], () => r(require('@/views/layout/layout')), 'layout');

const defaultComp = r =>
  require.ensure([], () => r(require('@/views/default/index')), 'default');

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: layout,
      // redirect: { name: 'default' },
      children: [
        {
          path: '/option',
          name: 'option',
          component: option,
        },
        {
          path: '/default',
          name: 'default',
          component: defaultComp,
        },
      ],
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
