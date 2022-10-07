<template>
  <BaseCard v-for="bookMark in bookMarks" :key="bookMark.id">
    <h2>{{ bookMark.title }}</h2>
    <button @click="$emit('deleteBookMark', bookMark.id)">✖️</button>
    <p>{{ bookMark.text }}</p>
    <a :href="bookMark.url">Link</a>
  </BaseCard>
</template>

<script>
export default {
  props: ["bookMarks"],
  emits: ["deleteBookMark", "addMark"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #fa0;
}
</style>
