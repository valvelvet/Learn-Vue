<template>
  <base-container title="User Auth">
    <UserAuth></UserAuth>
  </base-container>
  <base-container title="Vuex" v-if="auth != '遊客'">
    <h2>store.state：{{ count }}</h2>
    <h2>...mapGetters：{{ rangeCounter }}</h2>
    <button @click="addCount">store.dispatch，延遲+10</button>
    <button @click="addCounter({ num: 10 })">...mapActions，延遲+10</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import UserAuth from "./components/UserAuth.vue";
// import { mapGetters, mapActions } from "vuex";

// 用 createNamespacedHelpers 指定取代 map 時的模組路徑
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("counter");

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
    count() {
      // 使用 state 的寫法
      // -1
      // return this.$store.state.counter;
      // -1.1
      // // 使用 namespace 區分模塊後，使用模塊 counter 中的 state
      return this.$store.state.counter.counter;
    },
    // -2
    // rangeCounter() {
    //   return this.$store.getters.rangeCounter;
    // },
    // -2.1：使用模塊路徑
    // rangeCounter() {
    //   return this.$store.getters["counter/rangeCounter"];
    // },
    // -3：用 ES6 的 展開/其餘運算子，指定 getter 的哪些項展開
    // ...mapGetters(["rangeCounter"]),
    // -3.1：使用 namespace 區分模塊後，使用模塊 counter 中的 getter
    // ...mapGetters(["counter/rangeCounter"]), // 不能用？
    // ...mapGetters("counter", ["rangeCounter"]), // 有用
    // -3.2：用 createNamespacedHelpers 指定取代 ...map 時的模組路徑
    ...mapGetters(["rangeCounter"]),
  },
  methods: {
    addCount() {
      // 使用 mutations的寫法
      // // - 1
      // this.$store.commit("addCounter", { num: 10 });
      // // -1.1：使用模塊路徑
      // this.$store.commit("counter/addCounter", { num: 10 });
      // // - 2
      // this.$store.commit({
      //   type: "addCounter",
      //   num: 10,
      // });
      // // - 2.1：使用模塊路徑
      // this.$store.commit({
      //   type: "counter/addCounter",
      //   num: 10,
      // });

      // 使用 actions的寫法
      // // -1
      // this.$store.dispatch("addCounter", { num: 10 });
      // // -1.1：使用模塊路徑
      // this.$store.dispatch("counter/addCounter", { num: 10 });
      // // -2
      // this.$store.dispatch({
      //   type: "addCounter",
      //   num: 10,
      // });
      // // -2.1：使用模塊路徑
      this.$store.dispatch({
        type: "counter/addCounter",
        num: 10,
      });
    },
    // -3：用 mapActions
    // ...mapActions(["addCounter"]),
    // ...mapActions({ AC: "addCounter" }), // 取別名
    // -3.1：使用模塊路徑
    // ...mapActions(["counter/addCounter"]), // 無用
    // ...mapActions('counter',["addCounter"]),
    // -3.2：用 createNamespacedHelpers 指定取代 ...map 時的模塊路徑
    ...mapActions(["addCounter"]),
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
