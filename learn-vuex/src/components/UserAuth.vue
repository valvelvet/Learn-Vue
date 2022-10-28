<template>
  <input type="text" v-model="PSW" />
  <button v-if="auth === '遊客'" @click="authLogin()">登入</button>
  <button v-else @click="authLogout()">登出</button>
  <p>身份：{{ $store.getters.auth }}</p>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      PSW: "",
    };
  },
  computed: {
    auth() {
      // return this.$store.getters.testAuth;
      return this.$store.getters.auth;
    },
  },
  methods: {
    ...mapActions(["login", "logout"]),
    authLogin() {
      this.login(this.PSW);
      this.PSW = "";
    },
    authLogout() {
      this.logout();
      this.PSW = "";
    },
  },
};
</script>
