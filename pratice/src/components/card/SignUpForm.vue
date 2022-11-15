<template>
  <BaseCard>
    <form @submit.prevent="signUp()">
      <h2>- 註冊為繪師 -</h2>
      <div class="input">
        <BaseInput
          label="&emsp;&emsp;帳號："
          placeholder="電子信箱"
          type="email"
          v-model.trim="data.email"
          :inputError="valid.email"
          @onInput="updateData('email', $event)"
        ></BaseInput>
        <BaseInput
          label="&emsp;&emsp;密碼："
          placeholder="至少六位英數字"
          type="password"
          v-model.trim="paw1"
          :inputError="valid.paw"
          @onInput="pawCheck('paw1', $event)"
        ></BaseInput>
        <BaseInput
          label="確認密碼："
          type="password"
          v-model.trim="paw2"
          :inputError="valid.paw"
          @onInput="pawCheck('paw2', $event)"
        ></BaseInput>
      </div>
      <BaseButton :disable="loading || !(data.email && paw1 && paw2)">註冊</BaseButton>
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
      paw1: "",
      paw2: "",
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
    async signUp() {
      this.loading = true;
      this.valid.email = false;
      this.valid.paw = false;
      this.valid.msg = "";
      if (!this.data.email) {
        this.valid.email = true;
        this.valid.msg += "請填寫信箱\n";
      }
      if (!this.data.paw) {
        this.valid.paw = true;
        this.valid.msg += "密碼驗證錯誤\n";
      }
      if (!this.valid.msg) {
        const res = await this.$store.dispatch("signUp", this.data);
        if (res.code === 200) {
          this.$router.push({ name: "SETTING" });
        } else {
          if (res.code === 3001) this.valid.email = true;
          if (res.code === 3002) this.valid.paw = true;
          this.valid.msg = res.message;
        }
      }
      this.loading = false;
      this.updateData("paw", null);
    },
    pawCheck(num, paw) {
      this[num] = paw;
      if (this.paw1 === this.paw2) {
        this.updateData("paw", paw);
      } else {
        this.updateData("paw", null);
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
