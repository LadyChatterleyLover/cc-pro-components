import Area from './src/index.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcChooseArea', Area)
  },
}
