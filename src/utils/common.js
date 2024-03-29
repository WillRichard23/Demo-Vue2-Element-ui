import sha256 from "js-sha256";
import request from "./request";
import store from "@/store/store";

export default {
  //加密密码
  handlePwd(pwd) {
    return sha256(pwd);
  },
  //获取用户信息
  getUserInfo(params) {
    request({
      method: "post",
      url: "/api/system/getUserInfo",
      params: {
        type: 1,
        ...params,
      },
    }).then((res) => {
      if (res.data.code == "200") {
        store.commit("SET_UserInfo", res.data.result);
        return res.data.result;
      }
    });
  },
};
