import { createStore } from "vuex";

const store = createStore({
  state: {
    islogin: false,
    loginId: "",
    painters: {},
    tagsOpctions: [
      { id: 1, value: "頭貼" },
      { id: 2, value: "CG立繪" },
      { id: 3, value: "個人工作室" },
      { id: 4, value: "3D" },
      { id: 5, value: "v皮" },
      { id: 6, value: "跨時代" },
      { id: 7, value: "實體藝術" },
      { id: 8, value: "電繪" },
      { id: 9, value: "指導" },
      { id: 10, value: "獵奇" },
      { id: 11, value: "二創" },
      { id: 12, value: "漫畫" },
      { id: 13, value: "類真" },
      { id: 14, value: "日系" },
    ],
    commissions: [],
  },
  getters: {
    islogin(state) {
      return state.islogin;
    },
    loginId(state) {
      return state.loginId;
    },
    painters(state) {
      return state.painters.filter((painter) => painter.isEnable === true);
    },
    painterInfo: (state) => (id) => {
      return state.painters.filter((painter) => painter.email === id)[0];
    },
    tags: (state) => (tags) => {
      const tagsOpctions = state.tagsOpctions.filter(
        (tagOpction) => tags.find((tagId) => tagId === tagOpction.id) >= 0
      );
      return tagsOpctions;
    },
    tagsOpctions(state) {
      return state.tagsOpctions;
    },
    getCommissions(state) {
      return state.commissions.filter((mes) => mes.painterId === state.loginId);
    },
  },
  mutations: {
    getPainters(state, payload) {
      state.painters = payload;
    },
    logout(state) {
      state.islogin = false;
    },
    login(state, payload) {
      state.islogin = true;
      state.loginId = payload;
    },
  },
  actions: {
    async getPainters(context) {
      await fetch("https://learn-vue-http-285cc-default-rtdb.firebaseio.com/painters.json")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const painters = [];
          for (const key in res) {
            painters.push({
              avator: res[key].avator ?? "",
              description: res[key].description ?? "",
              email: key,
              isEnable: res[key].isEnable ?? false,
              name: res[key].name,
              paw: res[key].paw,
              tags: res[key].tags ? [...res[key].tags] : [],
              works: res[key].works ? [...res[key].works] : [],
            });
          }
          context.commit("getPainters", [...painters]);
        });
    },
    async register(context, payload) {
      await fetch(`https://learn-vue-http-285cc-default-rtdb.firebaseio.com/painters/${payload.email}.json`, {
        method: "put",
        body: JSON.stringify({
          paw: payload.paw,
          name: payload.name,
          isEnable: false,
        }),
      });
      return await context.dispatch("login", payload);
    },
    logout(context) {
      context.commit("logout");
    },
    async login(context, payload) {
      await context.dispatch("getPainters");
      if (context.state.painters.find((p) => p.email === payload.email && p.paw === payload.paw)) {
        context.commit("login", payload.email);
        return true;
      } else return false;
    },
    async updatePainterInfo(_context, payload) {
      await fetch(`https://learn-vue-http-285cc-default-rtdb.firebaseio.com/painters/${payload.email}.json`, {
        method: "put",
        body: JSON.stringify(payload),
      });
    },
    async addNewCommission(context, payload) {
      await fetch(`https://learn-vue-http-285cc-default-rtdb.firebaseio.com/commissions.json`, {
        method: "post",
        body: JSON.stringify({ ...payload, time: new Date() }),
      });
    },
    async getCommissions(context) {
      await fetch("https://learn-vue-http-285cc-default-rtdb.firebaseio.com/commissions.json")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          res = Object.values(res);
          context.state.commissions = res.filter((mes) => mes.painterId === context.state.loginId);
        });
    },
  },
});

export default store;
