<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ showList ? "&and;" : "&or;" }}</button>
    <button @click="toggleFavorite">{{ isFavorite ? "❤️" : "🤍" }}</button>
    <ul v-if="showList">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props 描述從父組件接收哪些資料，也可對資料做個別描述做驗證
  // 驗證結果若有錯誤，會顯示在瀏覽器的 console，ex:
  //	[Vue warn]: Invalid prop: custom validator check failed for prop "email".
  //	at <FriendConact name="Cali" phone="01-2345 6789" email="cali003fake.mail.com" >
  //	at <App>
  // 1. 接收哪些資料
  // props: ["name", "phone", "email"],
  // 2. 規範接收資料的型態
  // props: { name: String, phone: String, email: String },
  // 3. 更多規範/驗證
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validator: function (value) {
        return value.indexOf("@") >= 0;
      },
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  // 這裡的 emits不是必要的，寫這裡重要的是為了將散落在組件中的 $emit集中描寫，另外也可以針對個別 $emit做描述驗證
  // 1. 集中此組件中的 $emit
  emits: ["toggle-favorite"],
  // 2. 對 $emit做規範/驗證
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) return true;
  //     else {
  //       console.log("Error for missing id");
  // 			return false;
  //     }
  //   },
  // },

  data() {
    return {
      showList: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showList = !this.showList;
    },
    toggleFavorite() {
      // this.favoriteFriend = !this.favoriteFriend;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<style>
h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

button {
  border-radius: 50%;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border: 1px solid #ffaa00;
  background-color: #fff;
  color: #ccc;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  color: #222;
  background-color: #fd9;
  border-color: #fd9;
}
</style>
