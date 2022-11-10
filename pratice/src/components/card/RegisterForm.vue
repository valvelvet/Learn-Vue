<template>
  <BaseCard>
    <form @submit.prevent="register()">
      <h2>- 註冊為繪師 -</h2>
      <div class="input">
        <BaseInput
          label="&emsp;&emsp;信箱："
          v-model.trim="data.email"
          @onInput="updateData('email', $event)"
        ></BaseInput>
        <BaseInput
          label="&emsp;&emsp;暱稱："
          v-model.trim="data.name"
          @onInput="updateData('name', $event)"
        ></BaseInput>
        <BaseInput
          label="&emsp;&emsp;密碼："
          type="password"
          v-model.trim="paw1"
          @onInput="pawCheck('paw1', $event)"
        ></BaseInput>
        <BaseInput
          label="確認密碼："
          type="password"
          v-model.trim="paw2"
          @onInput="pawCheck('paw2', $event)"
        ></BaseInput>
      </div>
      <BaseButton>註冊</BaseButton>
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
        name: "",
      },
      paw1: "",
      paw2: "",
      valid: {
        msg: "",
        email: false,
        paw: false,
        name: false,
      },
    };
  },
  methods: {
    updateData(key, data) {
      data ? (this.valid[key] = true) : (this.valid[key] = false);
      this.data[key] = data;
      if (key === "email") {
        console.log(data);
      }
    },
    async register() {
      this.valid.msg = "";
      if (!this.data.email) this.valid.msg += "請填寫信箱\n";
      if (!this.data.name) this.valid.msg += "請填寫暱稱\n";
      if (!this.data.paw) this.valid.msg += "密碼驗證錯誤\n";
      if (!this.valid.msg) {
        console.log(this.data);
        const res = await this.$store.dispatch("register", this.data);
        if (res) {
          this.$router.push({ name: "SETTING" });
        } else {
          console.log(res);
        }
      }
    },
    pawCheck(num, paw) {
      this[num] = paw;
      if (this.paw1 === this.paw2) {
        this.valid.paw = true;
        this.updateData("paw", paw);
      } else {
        this.valid.paw = false;
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
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #855;
}
</style>
