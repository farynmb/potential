import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//do i need the photo page route here ./phView or something like that
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
