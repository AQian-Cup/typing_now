import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import "virtual:uno.css"
import "@unocss/reset/tailwind.css"
import router from "./router"

createApp(App).use(router).use(createPinia()).mount("#app")
