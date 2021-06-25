import Vue from "vue";
import Vuex from "vuex";
import mutations from "./modules/Mutations";
import getters from "./modules/Getters";
import actions from "./modules/Actions";

Vue.use(Vuex);

const state = {
  appVersion: process.env.VUE_APP_VERSION,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
