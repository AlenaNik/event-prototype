import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollReveal from 'vue-scroll-reveal';
Vue.config.productionTip = false;

Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
