<template>
  <base-section>
    <ul>
      <li v-for="goal in goals" :key="goal.id">
        <slot :item="goal" goal-info="..."></slot>
      </li></ul
  ></base-section>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        {
          id: 1,
          title: "Goal 1",
        },
        {
          id: 2,
          title: "Goal 2",
        },
        {
          id: 3,
          title: "Goal 3",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
