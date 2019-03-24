// Holder for util functions I want globally
import _ from 'underscore'

// leave the export, even if you don't use it
const fit = {}
export default ({ app, router, Vue }) => {
  // something to do
  fit.notifyPerSecond = _.throttle(function (msg) {
    Vue.prototype.$q.notify(msg)
  }, 1000)

  Vue.prototype.$fit = fit
}
