// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./pages/Home";
import Subpage from './pages/Subpage';
import 'element-theme-default';

Vue.use(Router);

const routes = [
  { path: "/",  component: Home },
  { path: "/sub/:menu_name", component: Subpage }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
