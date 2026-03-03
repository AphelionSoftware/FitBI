/* eslint-env node */
import { configure } from 'quasar/wrappers'

export default configure(function (/* ctx */) {
  return {
    boot: [
      'pinia',
      'axios',
      'firebase'
    ],

    css: [],

    extras: [
      'material-icons',
      'fontawesome-v6'
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },
      vueRouterMode: 'history',
      vitePlugins: []
    },

    devServer: {
      open: true,
      port: 8080
    },

    framework: {
      config: {},
      plugins: [
        'Notify',
        'Dialog'
      ]
    },

    animations: [],

    pwa: {
      workboxMode: 'generateSW'
    }
  }
})
