import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/base.css'
import * as Icons from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const i in Icons) {
  app.component(`ElIcon${i}`, (Icons as any)[i])
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
