import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      icon: "el-icon-s-home",
      label: "Главная",
    },
  },
  {
    path: "/employees",
    name: "Employees",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Employees.vue"),
    meta: {
      icon: "el-icon-s-custom",
      label: "Сотрудники",
    },
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
    meta: {
      icon: "el-icon-news",
      label: "Новости",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
