import CheckCard from './src/index.vue'
import CheckCardGroup from './src/group.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcCheckCard', CheckCard)
    app.component('CcCheckCardGroup', CheckCardGroup)
  },
}
