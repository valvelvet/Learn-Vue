<template>
  <div>
    <section class="teams">
      <ul>
        <teams-item
          v-for="team in teams"
          :key="team.id"
          :teamId="team.id"
          :name="team.name"
          :member-count="team.members.length"
        ></teams-item>
      </ul>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import TeamsItem from "./TeamsItem.vue";

export default {
  components: {
    TeamsItem,
  },
  inject: ["teams"],
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 1rem;
}
section{
  flex-grow: 1;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}
section.teams{
  max-width: 300px;
}
</style>
