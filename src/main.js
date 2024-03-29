import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import "@/assets/iconfont/iconfont.css";
import request from "@/utils/request";
import Common from "@/utils/common";
import axios from "axios";
import store from "@/store/store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

//挂载
Vue.prototype.$request = request;
Vue.prototype.$axios = axios;
Vue.prototype.$Common = Common;
Vue.prototype.$store = store;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
