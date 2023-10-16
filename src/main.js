import { createApp } from "vue";

import store from "./store";
import "./style.css";
import App from "./App.vue";
import * as filters from './filters'
import router from "./routers";


const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters