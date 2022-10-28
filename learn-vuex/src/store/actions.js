export default {
  login(context, payload) {
    if (payload === "1111") {
      context.commit("setAuth", 1);
    } else if (payload === "2222") {
      context.commit("setAuth", 2);
    }
  },
  logout(context) {
    context.commit("setAuth", 0);
  },
};
