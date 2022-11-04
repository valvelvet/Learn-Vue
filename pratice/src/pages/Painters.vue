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
    <TransitionGroup name="list" tag="ul" class="painter-card">
      <PainterCard
        v-for="painter in painters"
        :key="painter.id"
        :value="painter"
      ></PainterCard>
    </TransitionGroup>
  </section>
  <router-view></router-view>
</template>

<script>
import PainterCard from "../components/card/PainterCard.vue";
export default {
  components: { PainterCard },
  data() {
    return {
      filterName: "",
      filterTags: [],
    };
  },
  computed: {
    painters() {
      return this.$store.getters.painters.filter((item) => {
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
</style>
