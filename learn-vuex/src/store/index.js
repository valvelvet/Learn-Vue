import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

import counterStoreModule from "./counter/index.js";

const store = createStore({
  modules: {
    counter: counterStoreModule,
  },
  state() {
    return {
      EnumUserAuth: ["遊客", "會員", "管理員"],
      userAuth: 0,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
