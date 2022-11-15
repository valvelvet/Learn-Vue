import { createRouter, createWebHistory } from "vue-router";

import Painters from "./pages/Painters.vue";
import Commission from "./pages/Commission.vue";
import PainterSetting from "./pages/PainterSetting.vue";
import Register from "./pages/Register.vue";
import Message from "./pages/Message.vue";
import UnknownPage from "./pages/UnknownPage.vue";

import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/painters" },
    { path: "/painters", component: Painters },
    { name: "COMMISSION", path: "/commission", component: Commission },
    { name: "SETTING", path: "/setting", component: PainterSetting, meta: { requiresLogin: true } },
    { name: "REGISTER", path: "/:mode", component: Register, props: true },
    { name: "MESSAGE", path: "/message", component: Message, meta: { requiresLogin: true } },
    { path: "/:unknown_page(.*)", component: UnknownPage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to) => {
  if (to.meta.requiresLogin && !store.getters.token) return { name: "REGISTER", params: { mode: "login" } };
  else return;
});

export default router;
