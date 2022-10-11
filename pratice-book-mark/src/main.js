import { createApp } from "vue";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseTextInput from "./components/UI/BaseTextInput.vue";
import BasePopup from "./components/UI/BasePopup.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseTextInput", BaseTextInput);
app.component("BasePopup", BasePopup);
app.mount("#app");
