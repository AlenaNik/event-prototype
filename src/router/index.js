import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.view.vue";
import Detail from "../views/Detail.view";
import Confirmation from "../views/Confirmation.view";
import Admin from "../views/Admin.view";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Detail
  },
  {
    path: "/bookings",
    name: "Confirmation",
    component: Confirmation,
    props: true
  },
  {
    path: "/admin-area",
    name: "Admin area",
    component: Admin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
