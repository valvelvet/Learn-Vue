<template>
  <base-container title="User Auth">
    <UserAuth></UserAuth>
  </base-container>
  <base-container title="Vuex" v-if="auth!='遊客'">
    <h2>store.state：{{ count }}</h2>
    <h2>...mapGetters：{{ rangeCounter }}</h2>
    <button @click="addCount">store.dispatch，延遲+10</button>
    <button @click="addCounter({ num: 10 })">...mapActions，延遲+10</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseContainer,
    UserAuth
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
    count() {
      return this.$store.state.counter;
    },
    // rangeCount() {
    //   return this.$store.getters.rangeCounter;
    // },
    // 用 ES6的 展開/其餘運算子，指定 getter的哪些項展開
    ...mapGetters(["rangeCounter"]),
  },
  methods: {
    // addCount() {
    // 使用 mutations的寫法
    // - 1
    //   this.$store.commit("addCounter", { num: 10 });
    // - 2
    //   this.$store.commit({
    //     type: "addCounter",
    //     num: 10,
    //   });
    // },

    // 使用 actions的寫法
    addCount() {
      // - 1
      //   this.$store.dispatch("addCounter", { num: 10 });
      // - 2
      this.$store.dispatch({
        type: "addCounter",
        num: 10,
      });
    },
    // -3.0：用 mapActions
    ...mapActions(["addCounter"]),
    // -3.1：用 mapActions，取別名
    // ...mapActions({ AC: "addCounter" }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
