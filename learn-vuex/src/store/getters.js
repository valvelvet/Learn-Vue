export default {
  auth(state) {
    return state.EnumUserAuth[state.userAuth];
  },
};
