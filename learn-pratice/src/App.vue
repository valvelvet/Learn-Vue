<template>
  <article>
    <header>
      <h1>Friends List</h1>
    </header>
    <ul>
      <friend-conact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavorite"
      >
      </friend-conact>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Amy",
          phone: "09-8765 4321",
          email: "amy001@fake.mail.com",
        },
        {
          id: 2,
          name: "Bill",
          phone: "01-2345 6789",
          email: "bill002@fake.mail.com",
        },
        {
          id: 3,
          name: "Cali",
          phone: "01-2345 6789",
          email: "cali003@fake.mail.com",
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const friend = this.friends.find((friend) => friend.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
