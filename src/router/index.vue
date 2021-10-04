<script>
import Vue from "vue";
import VueRouter from "vue-router";
import HealthPage from "../views/HealthPage.vue";
import JoinPage from "../views/JoinPage.vue";
import LoginPage from "../views/LoginPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "health",
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
});

export default router
</script>