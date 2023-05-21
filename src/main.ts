import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/reset.css"
import "./assets/global.css"
import { store } from "./store";


createApp(App)
.provide("$store", store)
    .use(store)
    .use(router)
    .mount("#app");