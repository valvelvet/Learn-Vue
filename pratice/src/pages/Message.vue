<template>
  <section>
    <BaseCard v-for="mes in message" :key="mes" class="message-card">
      <h2>{{ mes.email }}</h2>
      <p>{{ mes.context }}</p>
      <time>{{ mes.time }}</time>
    </BaseCard>
  </section>
</template>

<script>
import store from "@/store/index.js";
export default {
  computed: {
    message() {
      return this.$store.getters["getCommissions"].map((mes) => {
        return {
          ...mes,
          time:
            mes.time.getFullYear() +
            "/" +
            ("0" + (mes.time.getMonth() + 1)).slice(-2) +
            "/" +
            ("0" + mes.time.getDate()).slice(-2) +
            " " +
            ("0" + mes.time.getHours()).slice(-2) +
            ":" +
            ("0" + mes.time.getMinutes()).slice(-2)
        };
      });
    },
  },
  beforeRouteEnter() {
    return  !store.getters.islogin ? { name: "REGISTER" } : true;
  },
};
</script>

<style scoped>
.message-card {
  margin-bottom: 2rem;
}
time{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
