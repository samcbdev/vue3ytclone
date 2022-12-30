import { createApp } from 'vue'
import { createPinia } from 'pinia' // for state 
import App from './App.vue'
import router from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/css/style.css"

const app = createApp(App)
const pinia = createPinia()

app
   .use(pinia)
   .use(router)
   .mount('#app')
