<template>
  <section>
    <h2>{{ teamName }}</h2>
    <router-link to="/teams/t1">t1</router-link>
    <router-link to="/teams/t2">t2</router-link>
    <router-link to="/teams/t3">t3</router-link>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["teams", "users"],
  props: ["teamId"], // 路由嵌套設置中，動態路徑的 props設為 true，組件即可以名稱取用 url上的動態參數
  components: {
    UserItem,
  },
  // data() {
  //   return {
  //     teamName: "Test",
  //     members: [],
  //   };
  // },

  // 使用帶有參數的路由時，相同的組件實例將被重複使用。
  // 因為兩個路由都渲染同個組件，比起銷毀再創建，復用則顯得更加高效。
  // 不過，這也意味著組件的生命週期鉤子不會被調用。
  created() {
    console.log("path: ");
    console.log(this.$route.path);
    console.log("params: ");
    console.log(this.$route.params);
    console.log("query: ");
    console.log(this.$route.query);

    // const teamId = this.$route.params.teamId;
    // const team = this.teams.find((team) => team.id === teamId);
    // this.teamName = team.name;
    // this.members = this.users.filter((user) => team.members.includes(user.id));
  },
  // 要對同一個組件中參數的變化做出響應的話，可以簡單地 watch $route對像上的任意屬性
  // 我這裡用 computed
  // watch: {
  //   $route() {},
  // },
  computed: {
    // teamId() { // 被 props取代
    //   return this.$route.params.teamId;
    // },
    team() {
      return this.teams.find((team) => team.id === this.teamId);
    },
    teamName() {
      return this.team.name;
    },
    members() {
      return this.users.filter((user) => this.team.members.includes(user.id));
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  background-color: #6ca;
  color: #fff;
  text-decoration: none;
  padding: 0 2rem;
}
a.active {
  background-color: #3a8;
}
</style>
