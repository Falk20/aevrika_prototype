import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/Home.vue"),
    meta: {
      icon: "el-icon-s-home",
      label: "Главная",
      inMenu: true,
    },
  },
  {
    path: "/employees",
    name: "Employees",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/Employees.vue"),
    meta: {
      icon: "el-icon-s-custom",
      label: "Сотрудники",
      inMenu: true,
    },
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/News.vue"),
    meta: {
      icon: "el-icon-news",
      label: "Новости",
      inMenu: true,
    },
  },
  {
    path: "/news-detail/:id",
    name: "NewsDetail",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/NewsDetail.vue"),
    meta: {
      icon: "el-icon-news",
      label: "Детальная новости",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
