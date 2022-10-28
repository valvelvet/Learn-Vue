export default {
  namespaced: true,
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
  actions: {
    addCounter(context, payload) {
      // context：用於調用 mutation
      // payload：可選參數，接收額外傳入的資料，傳物件可以包涵更多資訊
      setTimeout(() => {
        context.commit("addCounter", payload);
      }, 500);
    },
  },
  getters: {
    testAuth(state, _getters, rootState) {
      // 因為拆分成 module後，以 state訪問的是模塊的區域狀態
      // 若要訪問根節點狀態，需要引入第三個參數：rootState
      // 只有 state 為區域，Getter、Action 和 Mutation預設都是註冊在全局，所以注意不要重複命名
      // 或者可以用 namespace明確切分模塊：namespaced: true
      console.log(state.userAuth); // undefined：區域模塊無此狀態
      console.log(rootState.userAuth); // 0
    },
    doubleCounter(state) {
      return state.counter * 2;
    },
    rangeCounter(_state, getters) {
      if (getters.doubleCounter > 100) return 100;
      else return getters.doubleCounter;
    },
  },
};
