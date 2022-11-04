<template>
  <div class="main" :class="{ modeIsRegister: isRegister }">
    <section :class="{ select: isRegister }" @click="isRegister = true">
      <span id="register-text">SIGNUP</span>
      <RegisterForm id="register-form"></RegisterForm>
    </section>
    <section :class="{ select: !isRegister }" @click="isRegister = false">
      <span id="login-text">LOGIN</span>
      <LoginForm id="login-form"></LoginForm>
    </section>
  </div>
</template>

<script>
import LoginForm from "../components/card/LoginForm.vue";
import RegisterForm from "../components/card/RegisterForm.vue";
export default {
  components: { LoginForm, RegisterForm },
  data() {
    return {
      isRegister: true,
    };
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  overflow: hidden;
  display: flex;
}
section {
  padding: 0 2rem;
  display: inline-block;
  width: 100%;
}
section > div {
  width: 100%;
  height: calc(100vh - 60px - 6rem);
  position: relative;
  z-index: 1;
  opacity: 0.5;
  transition: 0.5s;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
span {
  user-select: none;
  font-weight: bold;
  position: fixed;
  z-index: 0;
  display: block;
  height: calc(100vh - 60px - 0.25rem);
  overflow: hidden;
  text-align: center;
  top: 50%;
  font-size: 12.5rem;
  line-height: 12.5rem;
  writing-mode: vertical-lr;
  color: #88a3;
  transform: translate(0, -50%) scaleX(2);
  transition: 0.5s;
}
#login-text {
  right: -3rem;
}
#register-text {
  left: -3rem;
}
.select > div {
  opacity: 1;
}
.modeIsRegister section > div {
  transform: translate(50%, 0);
}
.select span {
  color: #88a9;
}
.select #login-text {
  right: 0;
}
.select #register-text {
  left: 0;
}
@media screen and (max-width: 780px) {
  span {
    transform: translate(0, -50%) scaleX(1.4);
  }
  section > div {
    width: calc(100vw - 10rem);
    transform: translate(calc(-100vw + 10rem), 0);
  }
  .modeIsRegister section > div {
    transform: translate(2rem, 0);
  }
}
@media screen and (max-width: 500px) {
  section {
    padding: 0.5rem;
  }
  section > div {
    width: calc(100vw - 1rem);
    transform: translate(calc(-100vw + 30px), 0);
  }
  .modeIsRegister section > div {
    transform: translate(-30px, 0);
  }
}
</style>
