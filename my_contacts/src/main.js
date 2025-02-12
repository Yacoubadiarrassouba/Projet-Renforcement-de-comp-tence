import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);

createApp(App).use(store).use(router).mount("#app");
