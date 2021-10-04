import Vue from "vue";
import App from "./App.vue"
import HealthPage from "./views/HealthPage.vue";
import JoinPage from "./views/JoinPage.vue";
import LoginPage from "./views/LoginPage.vue";
import { createRouter, createWebHistory } from 'vue-router'

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

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes  
})

Vue.createApp(App).use(router).mount("#app")
// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app")

