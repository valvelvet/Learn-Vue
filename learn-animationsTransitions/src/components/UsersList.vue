<template>
  <div>
    <input type="text" v-model="inputUser" />
    <button @click="addUser">新增</button>
  </div>
  <!-- <ul> -->
  <transition-group tag="ul" name="list">
    <li v-for="user in users" :key="user" @click="userDelete(user)">{{ user }}</li>
  </transition-group>
  <!-- </ul> -->
</template>

<script>
export default {
  data() {
    return {
      users: ["Ann", "Bella", "Cindy", "David", "Emma"],
      inputUser: "",
    };
  },
  methods: {
    userDelete(user) {
      this.users = this.users.filter((i) => i !== user);
    },
    addUser() {
      if (this.inputUser) this.users.unshift(this.inputUser);
      this.inputUser = "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}
li {
  border: 1px solid #aca;
  padding: 0.25rem 5rem;
  color: #aca;
}
li:hover {
  background-color: #032;
}
button {
  margin-left: 1rem;
}

.list-leave-to,
.list-enter-from {
	opacity: 0;
  transform: translate(30px);
}
.list-move,
.list-leave-active,
.list-enter-active {
  transition: 0.3s ease;
}
.list-leave-active{
	position: absolute;
}
.list-leave-from,
.list-enter-to {
	opacity: 1;
  transform: translate(0px);
}
</style>
