<template>
  <section>
    <BaseCard class="filterBar">
      <BaseInput label="繪師：" type="text" v-model="filterName" @onInput="updateFilter('name', $event)" />
      <div>
        <BaseChipGroup v-model="opctionTags" @onInput="updateFilter('tags', $event)">
          {{ tag.value }}
        </BaseChipGroup>
      </div>
    </BaseCard>
    <BaseCard v-if="isloading" class="isloading"><div></div></BaseCard>
    <div v-else-if="!loadError">
      <TransitionGroup name="list" tag="ul" class="painter-card">
        <PainterCard v-for="painter in filterPainters" :key="painter.email" :value="painter"></PainterCard>
        <BaseCard v-if="filterPainters.length <= 0" class="no-painter">
          <li>找不到繪師，請調整搜尋條件</li>
        </BaseCard>
      </TransitionGroup>
    </div>
    <BaseCard v-else class="api-error">
      <p>請確認連線正常，稍後再試</p>
    </BaseCard>
  </section>
</template>

<script>
import PainterCard from "../components/card/PainterCard.vue";
export default {
  components: { PainterCard },
  data() {
    return {
      isloading: false,
      loadError: false,
      filterName: "",
      filterTags: [],
      painters: [],
    };
  },
  computed: {
    filterPainters() {
      return this.painters.filter((item) => {
        let queryTags = false;
        if (this.filterTags.length > 0) {
          queryTags = this.filterTags.some((queryItem) => {
            return item.tags.indexOf(queryItem) !== -1 || (queryItem === null && item.tags.length === 0);
          });
        }
        return (
          (this.filterName.length === 0 || item.name.includes(this.filterName)) &&
          (this.filterTags.length === 0 || queryTags)
        );
      });
    },
    opctionTags() {
      return [
        ...this.$store.getters.tagsOpctions.map((opction) => {
          opction.checked = this.filterTags.find((tag) => tag === opction.id) >= 0;
          return opction;
        }),
      ];
    },
  },
  methods: {
    updateFilter(filter, data) {
      if (filter === "tags") this.filterTags = data;
      else if (filter === "name") this.filterName = data;
    },
  },
  async created() {
    this.isloading = true;
    this.loadError = false;
    await this.$store.dispatch("getPainters").catch(() => {
      this.loadError = true;
    });
    this.painters = await this.$store.getters.painters;
    this.isloading = false;
  },
};
</script>

<style scoped>
.filterBar {
  padding-inline: 2rem;
}
.filterBar > div:first-child {
  margin-bottom: 1rem;
}
.painter-card {
  margin: auto;
  width: 600px;
}
.painter-card li {
  margin: 2rem auto;
}
.isloading,
.api-error,
.no-painter {
  padding: 4rem;
  text-align: center;
  margin: 2rem auto;
  color: #a88;
}
.no-painter {
  width: 100%;
  padding: 2rem;
  margin: 2rem auto;
}
.isloading div {
  width: 2rem;
  height: 2rem;
  margin: auto;
  border-radius: 50%;
  border: 5px solid #88a;
  border-right: 5px solid transparent;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
