import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    $background: '#525252'
  },
  mutations: {
    updateBackground: (state, newColor) => {
      state.$background = newColor;
    }
  },
  actions: {}
});
