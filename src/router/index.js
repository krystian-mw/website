import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Repos from '../views/Repositories.vue'
import Kontakt from '../views/Kontakt.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repos
  },
  {
  path: '/kontakt',
  name: 'Kontakt',
  component: Kontakt 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
