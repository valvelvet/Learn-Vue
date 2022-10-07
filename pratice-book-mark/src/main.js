import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import BaseTextInput from "./components/BaseTextInput.vue";
import ErrorPopup from "./components/ErrorPopup.vue";

const app = createApp(App);

app.component("BaseCard", BaseCard);
app.component("BaseTextInput", BaseTextInput);
app.component("ErrorPopup", ErrorPopup);
app.mount("#app");
