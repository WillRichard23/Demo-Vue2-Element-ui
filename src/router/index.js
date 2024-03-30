import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

const routes = [
  {
    path: "/",
    meta: {
      auth: true,
    },
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "",
        redirect: "/Login",
      },
      {
        path: "/Home",
        meta: {
          auth: false,
          title: "首页",
        },
        component: () => import("@/views/Home/Home.vue"),
        children: [
          {
            path: "",
            redirect: "HomeChildren1",
          },
          {
            path: "/Home/HomeChildren1",
            name: "HomeChildren1",
            component: () => import("@/views/Home/HomeChildren1/HomeChildren1"),
          },
          {
            path: "HomeChildren2",
            name: "HomeChildren2",
            component: () => import("@/views/Home/HomeChildren2/HomeChildren2"),
          },
          {
            path: "HomeChildren3",
            name: "HomeChildren3",
            component: () => import("@/views/Home/HomeChildren3/HomeChildren3"),
          },
        ],
      },
      {
        path: "/News",
        name: "News",
        meta: {
          auth: false,
          title: "新闻",
        },
        component: () => import("@/views/News/News.vue"),
      },
    ],
  },
  {
    path: "/Setting",
    name: "Setting",
    meta: {
      auth: false,
      title: "设置",
    },
    component: () => import("@/views/Setting/Setting.vue"),
  },
  {
    path: "/Login",
    meta: {
      auth: false,
      title: "登录",
    },
    component: () => import("@/views/Login/Login.vue"),
    children:[
      {
        path:"",
        redirect:'Loginf'
      },
      {
        path:"/Login/Loginf",
        name:'Loginf',
        component:() => import('@/views/Login/Loginf/Loginf')
      },
      {
        path:"/Login/Loginsms",
        name:'Loginsms',
        component:() => import('@/views/Login/Loginsms/Loginsms')
      }
    ]
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
