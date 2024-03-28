import sha256 from "js-sha256";

export default {
  //加密密码
  handlePwd(pwd) {
    return sha256(pwd);
  },
};
