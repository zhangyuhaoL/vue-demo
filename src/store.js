import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const calcuModule = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('increment', payload);
          resolve();
        }, 1000);
      });
    },
  },
};

export default new Vuex.Store({
  modules: {
    calcuModule,
  },
});
