import { api } from 'boot/axios'
import coreSetup from './coreSetup'
import initSetup from './initSetup'

export async function loadCoreData (userID) {
  const response = await api.get(`/setup/Core/${userID}`)
  coreSetup(response.data)
}

export async function loadInitData (userID) {
  const response = await api.get(`/setup/Init/${userID}`)
  initSetup(response.data)
}

export { api }
