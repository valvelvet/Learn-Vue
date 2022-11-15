<template>
  <BaseCard>
    <form @submit.prevent="login()">
      <h2>- 登入 -</h2>
      <div class="input">
        <BaseInput
          label="帳號："
          placeholder="電子信箱"
          type="email"
          v-model="data.email"
          :inputError="valid.email"
          @onInput="updateData('email', $event)"
        ></BaseInput>
        <BaseInput
          label="密碼："
          type="password"
          v-model="data.paw"
          :inputError="valid.paw"
          @onInput="updateData('paw', $event)"
        ></BaseInput>
      </div>
      <BaseButton :disable="loading || !(data.email && data.paw)">登入</BaseButton>
      <p class="error-msg">{{ valid.msg }}</p>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: {
        email: "",
        paw: "",
      },
      valid: {
        msg: "",
        email: false,
        paw: false,
      },
    };
  },
  methods: {
    updateData(key, data) {
      this.data[key] = data;
    },
    async login() {
      const res = await this.$store.dispatch("login", this.data);
      if (res.code === 200) {
        this.$router.push("/");
      } else {
        if (res.code === 3001) this.valid.email = true;
        if (res.code === 3002) this.valid.paw = true;
        this.valid.msg = res.message;
      }
    },
  },
};
</script>

<style scoped>
form {
  text-align: center;
}
h2 {
  font-size: 40px;
  color: #558;
}
.input {
  padding: 1rem 0;
}
.error-msg {
  display: block;
  height: 1rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #855;
}
</style>
