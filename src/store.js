import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    $background: "#525252",
    $textcolor: "white"
  },
  mutations: {
    updateBackground: (state, newColor) => {
      state.$background = newColor;
    },
    updateTextColor: (state, newColor) => {
      state.$textcolor = newColor;
    }
  },
  actions: {}
});
