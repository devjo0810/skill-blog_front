import router from "@/router";
import * as cookie from "@/utils/cookie";
import * as constants from "@/utils/constants";

export default {
  /** User 관련 **/
  async login({ commit, dispatch }, { id, password }) {
    console.log("[vuex] login :", id, password);
    const token = "sample";
    cookie.saveCookieToken(token);
    await commit("setToken", token);
    await dispatch("getUserInfo");
    dispatch("showAlert", ["로그인 되었습니다."]);
    routerPush("/");
  },
  async logout({ commit, dispatch }) {
    cookie.delCookieToken();
    await commit("setToken", "");
    await commit("setIsLogin", false);
    await commit("setUserInfo");
    dispatch("showAlert", ["로그아웃 되었습니다."]);
    routerPush("/");
  },
  async getUserInfo({ commit, state }) {
    console.log("[vuex] getUserInfo :", state.token);
    if (state.token) {
      const userInfo = {
        id: "test_1",
        nickname: "test_1",
        grade: "U",
      };
      await commit("setIsLogin", true);
      await commit("setUserInfo", userInfo);
    }
  },
  /** 공통 UI **/
  showAlert({ commit }, [message, title = "서비스 안내", callback]) {
    commit("setModal", {
      show: true,
      type: constants.DIALOG_TYPE.ALERT,
      message,
      title,
      callback,
    });
  },
  showConfirm({ commit }, [message, title = "서비스 안내", callback]) {
    commit("setModal", {
      show: true,
      type: constants.DIALOG_TYPE.CONFIRM,
      message,
      title,
      callback,
    });
  },
  hideModal({ commit }) {
    commit("setModal", {
      show: false,
      message: "",
      title: "",
      callback: null,
    });
  },
  showProgress({ commit }) {
    commit("setProgressStatus", true);
  },
  hideProgress({ commit }) {
    commit("setProgressStatus", false);
  },
};

const routerPush = path => {
  if (router.history.current.path !== path) router.push(path);
};
