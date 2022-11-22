<template>
  <main>
    <div>
      <add-user></add-user>
      <delete-user></delete-user>
    </div>
    <div>
      <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
      <projects-list :user="selectedUser"></projects-list>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

import AddUser from "./components/AddUser.vue";
import DeleteUser from "./components/DeleteUser.vue";

import USER_DATA from "./dummy-data.js";
import UserList from "./components/users/UserList.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";

const selectedUser = ref(null);
const activeUsers = USER_DATA;

function selectUser(uid) {
  selectedUser.value = activeUsers.find((usr) => usr.id === uid);
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

main {
  max-width: 800px;
  margin: 3rem auto;
}

section {
  display: inline-block;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  vertical-align: top;
  width: calc(50% - 2rem);
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
