import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueMask from "v-mask";
import VueScrollTo from "vue-scrollto";
import VueWindowSize from "vue-window-size";

Vue.component("slick-carousel", VueSlickCarousel);

Vue.use(VueWindowSize);
Vue.use(VueScrollTo, {
  duration: 1000
});
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
