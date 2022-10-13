<template>
  <article>
    <header>
      <h1>Friends List</h1>
    </header>
    <new-friend class="new-friend" @add-new-friend="addNewFriend"></new-friend>
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
        @delete-friend="deleteFriend"
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
			console.log(this.friends);
      const friend = this.friends.find((friend) => friend.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
    addNewFriend(newFriend) {
      this.friends.push({
        id: this.friends.length + 1,
        ...newFriend,
      });
    },
    deleteFriend(friendId) {
			const friend = this.friends.find((friend) => friend.id === friendId);
      this.friends.splice(friend,1);
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
  border-radius: 0 0 10px 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 500px;
}
article {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.new-friend {
  width: 90%;
  max-width: 500px;
  margin: 1rem;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
article > ul {
  width: 90%;
  max-width: 500px;
}
li {
  border: 1px solid #ccc;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  max-width: 40rem;
}
article > ul > li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
