<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />

    <!-- 全局註冊 vs 局部註冊 -->
    <!-- 局部註冊 -->
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>

    <!-- slot：訪問到子組件的狀態 -->
    <!-- <course-goal>
      <template  #default="courseGoal">
        <h2>{{ courseGoal.title }}</h2>
        <p>{{ courseGoal["goal-info"] }}</p>
      </template>
    </course-goal> -->
    <course-goal #default="courseGoal">
      <h2>{{ courseGoal.item.title }}</h2>
      <p>{{ courseGoal.goalInfo }}</p>
    </course-goal>
  </div>
</template>

<script>
// 局部註冊
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from "./components/CourseGoal.vue";

export default {
  // 局部註冊
  components: {
    // "the-header": TheHeader,
    // TheHeader: TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
