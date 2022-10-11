<template>
  <ul>
    <li v-for="bookMark in bookMarks" :key="bookMark.id">
      <BaseCard>
        <h2>{{ bookMark.title }}</h2>
        <p>{{ bookMark.text }}</p>
        <a :href="bookMark.url">Link</a>
        <BaseButton @click="deleteBookMark(bookMark.id)">✖️</BaseButton>
      </BaseCard>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["bookMarks", "deleteBookMark"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #fa0;
}
</style>
