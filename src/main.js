import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VueI18n from 'vue-i18n'
import i18n from './i18n'

Vue.createApp(App)
  .use(store)
  .use(router)
  .use(VueI18n)
  .use(i18n)
  .mount("#app");
