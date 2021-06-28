import Vue from "vue";
import Vuex from "vuex";
import mutations from "./modules/Mutations";
import getters from "./modules/Getters";
import actions from "./modules/Actions";
import { getCookieToken } from "@/utils/cookie";

Vue.use(Vuex);

const state = {
  appVersion: process.env.VUE_APP_VERSION,
  isLogin: false,
  token: getCookieToken() || "",
  userInfo: {
    id: null,
    nickname: null,
    grade: null,
  },
  modal: {
    show: false,
    title: null,
    message: null,
    type: "alert",
    callback: null,
  },
  progressStatus: false,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
