import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appWidth: window.innerWidth,
  },
  getters: {
    isMobile(state) {
      return state.appWidth < 768;
    },
  },
  mutations: {
    resizeWindow: (state) => {
      state.appWidth = window.innerWidth;
    },
  },
  actions: {},
  modules: {},
});
