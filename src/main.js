import { createApp } from "vue";
import App from "./App.vue";

//import "./assets/base.css";
import MyFirstVueComponent from "@/components/MyFirstVueComponent";

import router from "./router";

const app = createApp(App).use(router);
app.component("MyFirstVueComponent", MyFirstVueComponent);
app.mount("#app");
