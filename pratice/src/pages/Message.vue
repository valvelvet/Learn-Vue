<template>
  <section>
    <BaseCard v-if="message.length >= 1">
      <BaseCard v-for="mes in message" :key="mes" class="message-card">
        <a :href="'mailto:' + mes.email">
          <h2>{{ mes.email }}</h2>
        </a>
        <div>
          <p>{{ mes.context }}</p>
          <BaseButton class="close-button">✖️</BaseButton>
        </div>
        <time>{{ mes.time }}</time>
      </BaseCard>
    </BaseCard>
    <BaseCard v-else class="empty">
      <h2>- 還沒有委託呦ＱＱ -</h2>
    </BaseCard>
  </section>
</template>

<script>
import store from "@/store/index.js";
export default {
  data() {
    return {
      message: [],
    };
  },
  async created() {
    await this.$store.dispatch("getCommissions");
    this.message = await this.$store.getters["getCommissions"].map((mes) => {
      return {
        ...mes,
        time: mes.time.slice(0, 16).replace("T", " ").replace(/-/g, "/"),
      };
    });
  },
  beforeRouteEnter() {
    return !store.getters.islogin ? { name: "REGISTER" } : true;
  },
};
</script>

<style scoped>
.message-card {
  margin-block: 1rem;
}
.message-card p {
  display: inline-block;
  width: calc(100% - 2rem);
}
.close-button {
  width: 2rem;
  height: 2rem;
  vertical-align: bottom;
  padding: 0 !important;
  margin: 0 !important;
}
time {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
h2 {
  color: #558;
}
p {
  white-space: pre-wrap;
}
.empty h2 {
  text-align: center;
}
</style>
