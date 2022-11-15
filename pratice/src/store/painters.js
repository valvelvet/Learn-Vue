export default {
  state: {
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
  },
  getters: {
    painters(state) {
      return state.painters.filter((painter) => painter.isEnable === true);
    },
    painterInfo (state, _getters, _rootState, rootGetters) {
      const painterFilter = state.painters.filter((painter) => painter.email === rootGetters.userId)[0];
      if (painterFilter) return painterFilter;
      else
        return {
          email: rootGetters.userId,
          name: "",
          description: "",
          tags: [],
          works: ["", "", ""],
          avator: "",
        };
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
  },
  mutations: {
    getPainters(state, payload) {
      state.painters = payload;
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
              name: res[key].name,
              tags: res[key].tags ? [...res[key].tags] : [],
              works: res[key].works ? [...res[key].works] : [],
            });
          }
          context.commit("getPainters", [...painters]);
        });
    },
    async updatePainterInfo({ rootGetters }, payload) {
      await fetch(
        `https://learn-vue-http-285cc-default-rtdb.firebaseio.com/painters/${rootGetters.userId}.json?auth=${rootGetters.token}`,
        {
          method: "put",
          body: JSON.stringify(payload),
        }
      );
    },
  },
};
