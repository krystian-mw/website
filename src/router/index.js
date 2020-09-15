import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Repos from "../views/Repositories.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "nav:home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "nav:repos",
    component: Repos,
  },
  {
    path: "/kontakt",
    name: "nav:contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: false,
});

export default router;
