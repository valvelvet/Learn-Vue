<template>
  <button @click="comfirmInput">OK</button>
  <button @click="changedSave">表單確認</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changedSaved: false,
    };
  },
  methods: {
    comfirmInput() {
      this.$router.push("/teams"); // router導航
      console.log(this.$router);
      // this.$router.forward();  // 下一頁
      // this.$router.back();  // 上一頁
    },
    changedSave() {
      this.changedSaved = true;
    },
  },
  beforeRouteEnter(to, from) {
    // 指定路由使用守衛，在組件內與生命週期一樣添加，使用方法如"全局導航守衛"，可用 return或 next()控制導航
    console.log("=== 指定路由使用導航守衛 beforeRouteEnter ===", "\n-- to --\n", to, "\n-- form --\n", from);
  },
  beforeRouteLeave(to, from, next) {
    console.log("=== 離開路由前的導航守衛 beforeRouteLeave ===", "\n-- to --\n", to, "\n-- form --\n", from);
    if (this.changedSaved) {
      next();
    } else {
      // const seconedCheck = prompt("表單未送出，確定離開？");
      const seconedCheck = confirm("表單未送出，確定離開？");
      next(seconedCheck);
    }
  },
  unmounted() {
    console.log("unmounted");
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
