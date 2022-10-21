import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";
import RouterPage1 from "./components/pages/RouterPage1.vue";
import RouterPage2 from "./components/pages/RouterPage2.vue";
import RouterPage3 from "./components/pages/RouterPage3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RouterPage1, meta: { pageNum: 1 }, alias: "/page1" },
    { path: "/page2", component: RouterPage2, meta: { pageNum: 2 } },
    { path: "/page3", component: RouterPage3, meta: { pageNum: 3 } },
  ],
});
router.afterEach((to, from) => {
  to.meta.transitionName = to.meta.pageNum < from.meta.pageNum ? "slide-right" : "slide-left";
});

const app = createApp(App);

app.component("base-modal", BaseModal);

app.use(router);

// router.isReady() 當路由器完成初始化導航時(已經解析了所有與初始路由相關的異步輸入鉤子和異步組件)，返回一個Promise
// 可以確保服務器和客戶端的輸出一致
// 此時需要的作用是，讓重整時操作 DOM不觸發 Transition的動畫
router.isReady().then(() => {
  app.mount("#app");
});
