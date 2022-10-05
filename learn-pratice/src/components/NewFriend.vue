<template>
  <form @submit.prevent="submit">
    <label>
      姓名：
      <input type="text" v-model="newFriend.name" />
    </label>
    <label>
      電話：
      <input type="tel" v-model="newFriend.phone" />
    </label>
    <label>
      email：
      <input type="email" v-model="newFriend.email" />
    </label>
    <button>送出</button>
  </form>
</template>

<script>
export default {
  emits: ["add-new-friend"],
  data() {
    return {
      newFriend: {
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("add-new-friend", this.newFriend);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
	text-align: center;
}
label {
  margin: 0.5rem auto;
	width: 50%;
	text-align: end;
}
label input{
	width: 10rem;
}
form button {
  border-radius: 50px;
  width: auto;
  margin-top: 1rem;
}
</style>
