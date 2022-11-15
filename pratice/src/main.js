import { createApp, defineAsyncComponent } from "vue";

import router from "./router.js";
import store from "./store/index.js";

import BaseButton from "./components/base/BaseButton.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseChip from "./components/base/BaseChip.vue";
import BaseChipGroup from "./components/base/BaseChipGroup.vue";
import BaseInput from "./components/base/BaseInput.vue";
// import BaseTextarea from "./components/base/BaseTextarea.vue";

const BaseTextarea = defineAsyncComponent(() => import("./components/base/BaseTextarea.vue"));

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseChip", BaseChip);
app.component("BaseChipGroup", BaseChipGroup);
app.component("BaseInput", BaseInput);
app.component("BaseTextarea", BaseTextarea);

app.mount("#app");
