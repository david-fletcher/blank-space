import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    $background: "#525252",
    $darkmode: true
  },
  mutations: {
    updateBackground: (state, newColor) => {
      state.$background = newColor;
    },
    toggleDarkMode: state => {
      state.$darkmode = !state.$darkmode;
    }
  },
  actions: {}
});
