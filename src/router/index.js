import { createWebHistory, createRouter } from "vue-router";
import HealthPage from "../views/HealthPage.vue";
import JoinPage from "../views/JoinPage.vue";
import LoginPage from "../views/LoginPage.vue";
import LoggedPage from "../views/LoggedPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HealthPage
  },
  {
    path: "/joinpage",
    name: "joinpage",
    component: JoinPage
  },
  {
    path: "/loginpage",
    name: "loginpage",
    component: LoginPage
  },
  {
    path: "/loggedpage",
    name: "loggedpage",
    component: LoggedPage
  }
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;