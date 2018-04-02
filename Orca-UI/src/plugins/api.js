import API from './api/api'

// leave the export, even if you don't use it
// export default ({ app, router, Vue }) => {
export default ({app, Vue}) => {
  let config = process.env
  app.$API = new API(config)
  Vue.prototype.$API = app.$API
}
