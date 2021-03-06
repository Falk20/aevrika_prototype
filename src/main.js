import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import store from "./store";
import "./assets/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.addEventListener("resize", () => {
  store.commit("resizeWindow");
});
