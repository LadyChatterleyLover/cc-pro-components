import Grid from './src/index.vue'
import GridItem from './src/item.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcGrid', Grid)
    app.component('CcGridItem', GridItem)
  },
}
