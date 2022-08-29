import { createApp } from "vue";
import App from "./App.vue";
//import "./assets/base.css";
import MyFirstVueComponent from "@/components/MyFirstVueComponent";

const app = createApp(App);
app.component("MyFirstVueComponent", MyFirstVueComponent);
app.mount("#app");
