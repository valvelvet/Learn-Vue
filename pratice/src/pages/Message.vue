<template>
  <section>
    <BaseCard v-if="message.length >= 1">
      <BaseCard v-for="mes in message" :key="mes" class="message-card">
        <a :href="'mailto:' + mes.email">
          <h2>{{ mes.email }}</h2>
        </a>
        <div>
          <p>{{ mes.context }}</p>
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
};
</script>

<style scoped>
.message-card {
  margin-block: 1rem;
}
.message-card p {
  display: inline-block;
  width: 100%;
}
time {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #59a;
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
