import API from './api/api'

// leave the export, even if you don't use it
// export default ({ app, router, Vue }) => {
let APIinstance = {}
export default ({app, Vue}) => {
  let config = process.env
  APIinstance = new API(config)
  app.$API = APIinstance
  Vue.prototype.$API = app.$API
}

export { APIinstance }
