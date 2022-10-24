<template>
  <base-container title="Vuex">
    <h2>{{ count }}</h2>
    <h2>{{ rangeCount }}</h2>
    <button @click="addCount">+</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";

export default {
  components: {
    BaseContainer,
  },
  computed: {
    count() {
      return this.$store.state.counter;
    },
    rangeCount(){
      return this.$store.getters.rangeCounter;
    }
  },
  methods: {
    addCount() {
      // 使用 mutations的兩種寫法
      // - 1
      // this.$store.commit("addCounter", { num: 10 });
      // - 2
      this.$store.commit({
        type: "addCounter",
        num: 10,
      });
    },
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
