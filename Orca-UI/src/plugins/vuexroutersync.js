import { sync } from 'vuex-router-sync'
// leave the export, even if you don't use it
export default ({ app, router, store, Vue }) => {
  sync(store, router) // done. Returns an unsync callback fn
}
