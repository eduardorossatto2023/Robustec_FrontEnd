import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Engenharia from "../pages/Engenharia.vue";
import Comercial from "../pages/Comercial.vue";
import RegisterProduto from "../pages/RegisterProduto.vue";


function isAuthenticated() {
  return !!localStorage.getItem("access_token");
}

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/registerProduto", name: "Register Produto", component: RegisterProduto },
  { path: "/comercial", name: "Comercial", component: Comercial, meta: { requiresAuth: true },},
  { path: "/engenharia", name: "Engenharia", component: Engenharia, meta: { requiresAuth: true },},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard de autenticação
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
