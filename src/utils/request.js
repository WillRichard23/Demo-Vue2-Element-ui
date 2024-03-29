import axios from "axios";
import { Loading, Message } from "element-ui";
import Router from "@/router/index";

//创建axios实例
const request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

//加载动画设置
let loadingOption = {
  text: "加载中...",
};
let loadingInstance;

// 创建请求拦截
request.interceptors.request.use(
  (config) => {
    console.log(localStorage.getItem("token"));
    //开启加载动画
    loadingInstance = Loading.service(loadingOption);
    // 设置请求头
    if (!config.headers["content-type"]) {
      // 如果没有设置请求头
      if (config.method === "post") {
        config.headers["content-type"] = "application/x-www-form-urlencoded"; // post 请求
      } else {
        config.headers["content-type"] = "application/json"; // 默认类型
      }
    }
    console.log("请求配置", config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//创建响应拦截
request.interceptors.response.use(
  (response) => {
    loadingInstance.close();
    let responseCode = response.data.code;
    Message.closeAll();
    if (responseCode == "200") {
      Message.success("请求成功");
    } else if (responseCode != "200") {
      //401:未登陆/被停用/token过期等情况
      //B0005:token校验失败
      //A0076:无效token
      //跳转到登录页
      Message.warning(response.data.message);
      if (
        responseCode == "401" ||
        responseCode == "B0005" ||
        responseCode == "A0076"
      ) {
        Router.push({
          name: "HomeChildren1",
        });
      }
    }
    return response;
  },
  (error) => {
    //跨域存在获取不到状态码的情况
    if (error && error.response) {
      Message.error(response.data.message);
    }
    //跨域获取不到状态码或其他状态码进行的处理
    //网络超时异常处理
    else {
      if (
        error.code === "ECONNABORTED" ||
        error.message === "Network Error" ||
        error.message.includes("timeout")
      ) {
        Message.error("请求超时");
      }
    }
    return Promise.resolve(error.response);
  }
);

export default request;
