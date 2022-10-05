import { createApp } from "vue";
import App from "./App.vue";
import FriendConact from "./components/FriendConact.vue";

const app = createApp(App);
app.component("friend-conact", FriendConact);
app.mount("#app");
