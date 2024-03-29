import common from "@/utils/common";

const user = {
  state: {
    token: localStorage.getItem("token"),
    userInfo: "",
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },

    SET_UserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    },
  },

  actions: {
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        let result = common.getUserInfo();
        console.log(result);
        commit("SET_UserInfo", result);
        resolve(result);
      });
    },
  },
};

export default user;
