import dataList from './src/index.vue'
import dataListItem from './src/item.vue'
import dataListItemMeta from './src/itemMeta.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('CcDataList', dataList)
    app.component('CcDataListItem', dataListItem)
    app.component('CcDataListItemMeta', dataListItemMeta)
  },
}
