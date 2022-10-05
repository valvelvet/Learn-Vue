import { createApp } from "vue";
import App from "./App.vue";
import NewFriend from "./components/NewFriend.vue";
import FriendConact from "./components/FriendConact.vue";

const app = createApp(App);
app.component("new-friend", NewFriend);
app.component("friend-conact", FriendConact);
app.mount("#app");
