import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamsMembers from "./components/teams/TeamMembers.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      name: "TEAMS", // 加上 name做辨識，防止在導航的 url中出現打字錯誤，可以向 router-link組件的 to屬性傳遞一個對象
      meta: { requiresAuth: true }, // meta: 附加在路由上的自定義數據，在組件用 $route或在"導航守衛"中以 to.meta.XXX 使用
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter }, // 多個不同的 router-view以屬性 name區分，配置對應組件
      children: [{ path: ":teamId", name: "TEAM_MEMBERS", component: TeamsMembers, props: true }],
    },
    {
      path: "/users",
      // component: UsersList,
      components: { default: UsersList, footer: UsersFooter },
      // 指定路由使用守衛，使用方法如"全局導航守衛"，可用 return或 next()控制導航
      beforeEnter(to, from) {
        console.log("=== 指定路由使用導航守衛 beforeEnter ===", "\n-- to --\n", to, "\n-- form --\n", from);
      },
    },
    // { path: "/teams/new" },	// 若有個'靜態頁面'在與'動態路徑'同路徑下層，需要先寫此'靜態頁面'，否則會被解析成'動態路徑'之一
    // { path: "/teams/:teamId", component: TeamsMembers, props: true }, // 動態路徑
    //    動態路徑：props: true,：將自動在組件提供一個 prop:['teamId']，將 url上的 teamId值 直接給予組件使用，取代 this.$route.params.teamId
    { path: "/:notThisUrl(.*)", component: NotFoundPage }, // 匹配所有頁面的寫法；(.*)：為一正規表達式，所有路徑的頁面將使用此設定，所以優先權應設為最低，排在 routes的最後
  ],

  linkActiveClass: "active", // 替換路徑中 <router-link>上的 class名稱，預設為："router-link-active"
  linkExactActiveClass: "exact-active", // 替換精準路徑 <router-link>上的 class名稱，預設為："router-link-exact-active"

  scrollBehavior(to, from, savedPosition) {
    // to: 到哪
    // from: 從哪
    // savedPosition: 只有上一頁時有用，紀錄頁面滾動到的位置  // {left: 0, top: 100}
    console.log(
      "=== scrollBehavior ===",
      "\n-- to --\n",
      to,
      "\n-- form --\n",
      from,
      "\n-- savedPosition --\n",
      savedPosition
    );
    if (savedPosition) return savedPosition; // 如果返回上一頁，表示 savedPosition有紀錄離開上頁時的滾動位置，即回到此位置
    return { top: 0, left: 0 }; // 如果 savedPosition不存在，就跳到頁面頂
  },
});

// 全局導航守衛
// 前置守衛
// router.beforeEach((to, from, next) => { // 第三個參數(next)為可選，且為一個函數
router.beforeEach((to, from) => {
  console.log("=== beforeEach ===", "\n-- to --\n", to, "\n-- form --\n", from);

  // 導航成功/失效控制方法：＊以前都用 next()，新版的 vue router 可以直接用 return控制，且文件建議使用 return
  //    直接 return
  //    調用第三個參數 next()

  // 控制可傳參數：
  //    路由地址：指定導航前往的頁面，參數同使用 router.push()時的參數一樣
  //    Boolean：false - 取消導航；不回傳值(undefined)或回傳 true - 導航有效前往目標頁面

  // 避免無限重新定向
  //   return寫法
  //     if (to.name !== "TEAM_MEMBERS") {
  //       return { name: "TEAM_MEMBERS", params: { teamId: "t1" } };
  //     }
  //   用 next()的寫法
  //     if (to.name === "TEAM_MEMBERS") {
  //       next();
  //     } else {
  //       next({ name: "TEAM_MEMBERS", params: { teamId: "t1" } });
  //     }

  // meta: 附加在路由上的自定義數據，在組件用 $route；在"導航守衛"中以 to.meta.XXX 使用
  if (to.meta.requiresAuth) {
    console.log("此路由需要驗證權限");
    return;
  } else console.log("此路由不需驗證權限");
});

// 後置守衛
// router.afterEach((to, from, failure) => { // 第三個參數(failure)為可選，為導航失敗參數
router.afterEach((to, from) => {
  console.log("=== afterEach ===", "\n-- to --\n", to, "\n-- form --\n", from);
});

export default router;
