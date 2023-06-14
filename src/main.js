// import './assets/styles/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.scss'
  
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')