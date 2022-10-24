import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addCounter(state, payload) {
      // state：預設參數，指向 store的 state
      // payload：可選參數，接收額外傳入的資料，傳物件可以包涵更多資訊
      state.counter += payload.num;
      // console.log(this.state.counter);
      // console.log(state.counter);
    },
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    rangeCounter(_state, getter) {
      if (getter.doubleCounter > 100) return 100;
      else return getter.doubleCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
