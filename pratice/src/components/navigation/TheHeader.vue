<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/2919/2919740.png" />
      </router-link>
      <div class="nav" v-if="!islogin">
        <BaseButton :isLink="true" :to="register">登入</BaseButton>
      </div>
      <div class="nav" v-else>
        <BaseButton :isLink="true" :to="commission">委託訊息</BaseButton>
        <BaseButton :isLink="true" :to="setting">設定</BaseButton>
        <BaseButton @click="logout">登出</BaseButton>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    islogin() {
      return this.$store.getters.islogin;
    },
    id() {
      return this.$store.getters.loginId;
    },
    register() {
      return "/register";
    },
    commission() {
      return { name: "MESSAGE" };
    },
    setting() {
      return { name: "SETTING" };
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 #ddd;
}
nav {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  max-width: 600px;
}
.logo img {
  height: 50px;
}
.nav {
  display: flex;
  align-items: center;
}
</style>
