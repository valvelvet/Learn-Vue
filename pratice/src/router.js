import { createRouter, createWebHistory } from "vue-router";

import Painters from "./pages/Painters.vue";
import Commission from "./pages/Commission.vue";
import PainterSetting from "./pages/PainterSetting.vue";
import Register from "./pages/Register.vue";
import Message from "./pages/Message.vue";
import UnknownPage from "./pages/UnknownPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/painters" },
    { path: "/painters", component: Painters },
    { name: "COMMISSION", path: "/commission", component: Commission },
    { name: "SETTING", path: "/setting", component: PainterSetting },
    { name: "REGISTER", path: "/register", component: Register },
    { name: "MESSAGE", path: "/message", component: Message },
    { path: "/:unknown_page(.*)", component: UnknownPage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
