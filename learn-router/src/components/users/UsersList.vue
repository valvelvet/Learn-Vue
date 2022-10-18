<template>
  <button @click="comfirmInput">OK</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    comfirmInput() {
      this.$router.push("/teams");  // router導航
      console.log(this.$router);
      // this.$router.forward();  // 下一頁
      // this.$router.back();  // 上一頁
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
