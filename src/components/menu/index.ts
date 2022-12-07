import Menu from './src/index'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcMenu', Menu)
  },
}
