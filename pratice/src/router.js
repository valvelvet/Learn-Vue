import { createRouter, createWebHistory } from "vue-router";
import Painters from "./pages/Painters.vue";
import PainterInfo from "./pages/PainterInfo.vue";
import Commission from "./pages/Commission.vue";
import Register from "./pages/Register.vue";
import Message from "./pages/Message.vue";
import UnknownPage from "./pages/UnknownPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/painters",
      component: Painters,
      children: {
        path: "/:id",
        component: PainterInfo,
      },
    },
    { path: "/commission", component: Commission },
    { path: "/register", component: Register },
    { path: "/message", component: Message },
    { path: "/unknown-page(.*)", component: UnknownPage },
  ],
});

export default router;
