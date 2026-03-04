import { boot } from 'quasar/wrappers'
import { loadCoreData, loadInitData } from 'src/api/api'
import { config } from 'src/config'

export default boot(async () => {
  await Promise.all([
    loadCoreData(config.UserID),
    loadInitData(config.UserID)
  ])
})
