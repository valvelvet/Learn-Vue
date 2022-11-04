<template>
  <BaseCard>
    <form @submit.prevent="login()">
      <h2>- 登入 -</h2>
      <div class="input">
        <BaseInput
          label="帳號："
          placeholder="email"
          v-model="data.email"
          @onInput="updateData('email', $event)"
        ></BaseInput>
        <BaseInput label="密碼：" type="password" v-model="data.paw" @onInput="updateData('paw', $event)"></BaseInput>
      </div>
      <BaseButton>登入</BaseButton>
      <p class="error-msg">{{ valid.msg }}</p>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      data: {
        email: "",
        paw: "",
      },
      valid: {
        msg: "",
      },
    };
  },
  methods: {
    updateData(key, data) {
      this.data[key] = data;
    },
    async login() {
      const res = await this.$store.dispatch("login", this.data);
      if (res) this.$router.push("/");
      else this.valid.msg= '帳號或密碼錯誤';
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
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #855;
}
</style>
