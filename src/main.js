import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faExternalLinkAlt, faLink);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
