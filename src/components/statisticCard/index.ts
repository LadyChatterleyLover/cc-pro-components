import StatisticCard from './src/index.vue'
import StatisticCardGroup from './src/group.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcStatisticCard', StatisticCard)
    app.component('CcStatisticCardGroup', StatisticCardGroup)
  },
}
