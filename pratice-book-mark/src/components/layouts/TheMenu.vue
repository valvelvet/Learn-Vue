<template>
  <nav>
    <BaseButton
      v-for="item in menu"
      :key="item"
      @click="changePage(item.component)"
      :mode="openingPage === item.component ? 'active' : ''"
    >
      {{ item.lable }}
    </BaseButton>
  </nav>
</template>

<script>
export default {
  props: { menu: Object, openingPage: String },
  methods: {
    changePage(t) {
      this.$emit("changePage", t);
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
}
nav :deep(button) {
  position: unset;
  width: auto;
  height: auto;
  border-radius: 50px;
  font-size: 1rem;
  transform: none;
  padding: 0.5rem 1rem;
  background-color: #ffe;
  margin: 0 1rem;
}
</style>
