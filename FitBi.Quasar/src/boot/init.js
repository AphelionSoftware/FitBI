import { boot } from 'quasar/wrappers'
import { loadCoreData, loadInitData } from 'src/api/api'
import { config } from 'src/config'

export default boot(async () => {
  try {
    await Promise.all([
      loadCoreData(config.UserID),
      loadInitData(config.UserID)
    ])
  } catch (err) {
    console.error('[init] Failed to load app data from API:', err)
  }
})
