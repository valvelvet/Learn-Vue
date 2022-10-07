<template>
  <h2>Active Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="errorString">
      <h2>Input Error</h2>
      <p>Emptey Input! Please enter some text.</p>
      <button @click="errorString = ''">close</button>
    </ErrorAlert></teleport
  >
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      errorString: "",
    };
  },
  methods: {
    setGoal() {
      const value = this.$refs.goal.value;
      if (!value) {
        this.errorString = "Error: 輸入不得為空";
      } else this.errorString = "";
    },
  },
};
</script>
