export default {
  state: {
    commissions: [],
  },
  getters: {
    getCommissions(state) {
      return state.commissions;
    },
  },
  mutations: {
    getPainters(state, payload) {
      state.painters = payload;
    },
  },
  actions: {
    async getCommissions(context) {
      return await fetch(
        `https://learn-vue-http-285cc-default-rtdb.firebaseio.com/commissions.json?auth=${context.rootGetters.token}`
      )
        .then((response) => {
          if (!response.ok) {
            throw response.json();
          }
          return response.json();
        })
        .then((responseData) => {
          responseData = Object.values(responseData);
          console.log(responseData);
          console.log(context.rootState.userId);
          context.state.commissions = responseData.filter((mes) => mes.painterId === context.rootState.userId);
          return {
            code: 200,
            data: responseData,
          };
        })
        .catch((error) => {
          return error.then((err) => {
            console.log(err);
            let message = "連線錯誤，請稍後再試";
            let code = 404;
            return {
              code: code,
              message: message,
            };
          });
        });
    },
    async addNewCommission(context, payload) {
      return await fetch(`https://learn-vue-http-285cc-default-rtdb.firebaseio.com/commissions.json`, {
        method: "post",
        body: JSON.stringify({ ...payload, time: new Date() }),
      })
        .then((response) => {
          if (!response.ok) {
            throw response.json();
          }
          return response.json();
        })
        .then((responseData) => {
          return {
            code: 200,
            data: responseData,
          };
        })
        .catch((error) => {
          return error.then((err) => {
            console.log(err);
            let message = "連線錯誤，請稍後再試";
            let code = 404;
            return {
              code: code,
              message: message,
            };
          });
        });
    },
  },
};
