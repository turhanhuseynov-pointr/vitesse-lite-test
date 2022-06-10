import { createApp } from 'vue'
import router from './plugins/router'
import App from './App.vue'
import quasar from './plugins/quasar'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(quasar, { plugins: {} })
app.mount('#app')
