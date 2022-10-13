<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />

    <!-- 全局註冊 vs 局部註冊 -->
    <!-- 局部註冊 -->
    <!-- <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info> -->

    <!-- slot：訪問到子組件的狀態 -->
    <!-- <course-goal>
      <template  #default="courseGoal">
        <h2>{{ courseGoal.item.title }}</h2>
        <p>{{ courseGoal["goal-info"] }}</p>
      </template>
    </course-goal> -->
    <!-- <course-goal #default="courseGoal">
      <h2>{{ courseGoal.item.title }}</h2>
      <p>{{ courseGoal.goalInfo }}</p>
    </course-goal> -->

    <button @click="toggle('active-goals')">Active Goals</button>
    <button @click="toggle('manage-goals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="goalsControl === 'active-goals'" />
    <ManageGoals v-if="goalsControl === 'manage-goals'" /> -->

    <!-- component 標籤簡單取代動態的組件切換，:is=""動態帶入組件名稱 -->
    <!-- <component :is="goalsControl"></component> -->

    <!-- 加上 keep-alive可使組件在切換時使用不完全刪除，保留組件狀態 -->
    <keep-alive>
      <component :is="goalsControl"></component>
    </keep-alive>
  </div>
</template>

<script>
// 局部註冊
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  // 局部註冊
  components: {
    // "the-header": TheHeader,
    // TheHeader: TheHeader,
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoal,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      goalsControl: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    toggle(tog) {
      this.goalsControl = tog;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
