import { createApp } from "vue";

import App from "./PraticeApp.vue";
// import App from './HomeworkApp.vue';

import BaseButton from "./components/BaseButton.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.mount("#app");
