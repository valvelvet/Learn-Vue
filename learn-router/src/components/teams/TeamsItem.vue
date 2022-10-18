<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="teamPath">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ["teamId", "name", "memberCount"],
  computed: {
    teamPath() {
      // to:帶入 url
      // return "/teams/" + this.teamId;

      // to:帶入物件
      return {
        name: "TEAM_MEMBERS", // 鏈接到一個命名的路由
        params: { teamId: this.teamId }, // 帶上動態路徑的參數
        query: { sort: "asc" }, // 查詢參數，可以看到在網址後帶上?sort=asc
      };
    },
  },
};
</script>

<style scoped>
li {
  margin-bottom: 1rem;
  border-bottom: #11005c dashed 2px;
  padding: 0 1rem 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #30a;
}

a:hover,
a:active ,
a.active {
  background-color: #979;
}
</style>
