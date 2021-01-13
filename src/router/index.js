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
    },
  },
  {
    path: "/news-detail/:id",
    name: "NewsDetail",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/NewsDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
