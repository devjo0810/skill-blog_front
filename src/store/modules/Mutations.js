export default {
  setIsLogin(state, loginState) {
    state.isLogin = loginState;
  },
  setToken(state, token) {
    state.token = token;
  },
  setUserInfo(state, payload) {
    if (payload) {
      for (let key in payload) {
        state.userInfo[key] = payload[key];
      }
    } else {
      const userInfo = {
        id: null,
        nickname: null,
        grade: null,
      };
      state.userInfo = userInfo;
    }
  },
  setModal(state, payload) {
    for (let key in payload) {
      state.modal[key] = payload[key];
    }
  },
  setProgressStatus(state, status) {
    state.progressStatus = status;
  },
};
