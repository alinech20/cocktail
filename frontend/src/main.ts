import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import '@/styles/main.scss'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#cocktail-app')
