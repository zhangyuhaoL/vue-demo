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
const songModule = {
  state: {
    playList: [],
  },
  mutations: {
    changeList(state, payload) {
      state.playList = payload;
    },
  },
  actions: {
    changeList({ commit }, payload) {
      commit('changeList', payload);
    },
  },
};

export default new Vuex.Store({
  modules: {
    calcuModule,
    songModule,
  },
});
