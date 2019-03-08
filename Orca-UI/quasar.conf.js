// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios',
      'enumCore',
      'api',
      'vuexroutersync',
      'auth0'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      env: ctx.dev === true ? {
        API_URL: JSON.stringify('http://localhost:7071/api'),
        coreURL: JSON.stringify('/setup/Core/'),
        coreToken: JSON.stringify('code=pkiVK8tel8UWZRhvYaJtAeQm0bhoGwQNEpmL9ZWg9Jg1ECzNPaLWZQ=='),
        initURL: JSON.stringify('/setup/Init/'),
        initToken: JSON.stringify('code=HkBEb7aL5O6WUH1oQFHBWfZxC8c4fCNa0NQxzyipv5Uu3awF8uxX3w=='),
        userSettingsURL: JSON.stringify('/setup/UserSettings/'),
        userSettingsToken: JSON.stringify(''),
        latestTimestampsURL: JSON.stringify('/setup/LatestTimestamps/'),
        latestTimestampsToken: JSON.stringify('code=vOk0CrfKzlq6pJH9/tr7WGL57iiXpNHDZ8rmUR9Vx7u45/EIkxYdxg=='),
        UserID: JSON.stringify(3),
        mergeExerciseToken: JSON.stringify(''),
        mergeExercise_SportToken: JSON.stringify(''),
        mergeExerciseLinkToken: JSON.stringify(''),
        mergeExerciseTypeToken: JSON.stringify(''),
        mergeSportToken: JSON.stringify(''),
        mergePlanToken: JSON.stringify(''),
        mergeWorkoutToken: JSON.stringify(''),
        mergeWorkout_ExerciseToken: JSON.stringify(''),
        mergeWorkoutStageToken: JSON.stringify(''),
        mergeDailyMeasurementToken: JSON.stringify('code=Q77kQaUmWmBdRfl4c1DIWbWZ3U/2lb86q2EQGQwzD3r0u4JXkmdagg=='),
        mergeMetricToken: JSON.stringify(''),
        mergePersonToken: JSON.stringify('code=/cuHac4rLHR1bjUQP0efciEXna8P6LNFMZouADss/dBHeOnAz9rnOg=='),
        mergeSkinfoldMeasurementToken: JSON.stringify(''),
        mergeTapeMeasurementToken: JSON.stringify(''),
        mergeWeightMeasurementToken: JSON.stringify(''),
        auth0domain: JSON.stringify('orcafit.eu.auth0.com'),
        auth0clientID: JSON.stringify('7HG6PvXW3BePnn0UzuwvwcbjsvcNg3hF'),
        auth0redirectUri: JSON.stringify('http://localhost:8080/#/'),
        auth0responseType: JSON.stringify('token id_token'),
        auth0scope: JSON.stringify('openid')

      }
        : {
          API_URL: JSON.stringify('https://fitapifunctions.azurewebsites.net/api'),
          coreURL: JSON.stringify('/setup/Core/'),
          coreToken: JSON.stringify('code=pkiVK8tel8UWZRhvYaJtAeQm0bhoGwQNEpmL9ZWg9Jg1ECzNPaLWZQ=='),
          initURL: JSON.stringify('/setup/Init/'),
          initToken: JSON.stringify('code=HkBEb7aL5O6WUH1oQFHBWfZxC8c4fCNa0NQxzyipv5Uu3awF8uxX3w=='),
          userSettingsURL: JSON.stringify('/setup/UserSettings/'),
          userSettingsToken: JSON.stringify(''),
          latestTimestampsURL: JSON.stringify('/setup/LatestTimestamps/'),
          latestTimestampsToken: JSON.stringify('code=vOk0CrfKzlq6pJH9/tr7WGL57iiXpNHDZ8rmUR9Vx7u45/EIkxYdxg=='),
          UserID: JSON.stringify(3),
          mergeExerciseToken: JSON.stringify(''),
          mergeExercise_SportToken: JSON.stringify(''),
          mergeExerciseLinkToken: JSON.stringify(''),
          mergeExerciseTypeToken: JSON.stringify(''),
          mergeSportToken: JSON.stringify(''),
          mergePlanToken: JSON.stringify(''),
          mergeWorkoutToken: JSON.stringify(''),
          mergeWorkout_ExerciseToken: JSON.stringify(''),
          mergeWorkoutStageToken: JSON.stringify(''),
          mergeDailyMeasurementToken: JSON.stringify('code=Q77kQaUmWmBdRfl4c1DIWbWZ3U/2lb86q2EQGQwzD3r0u4JXkmdagg=='),
          mergeMetricToken: JSON.stringify(''),
          mergePersonToken: JSON.stringify('code=/cuHac4rLHR1bjUQP0efciEXna8P6LNFMZouADss/dBHeOnAz9rnOg=='),
          mergeSkinfoldMeasurementToken: JSON.stringify(''),
          mergeTapeMeasurementToken: JSON.stringify('code=HKcdaGbZW8xYzevs2loRNaTvHTLvSgd1M4wKcQ7z/FHaNn2Mibg7KQ=='),
          mergeWeightMeasurementToken: JSON.stringify('code=7m4xU8bDJhIPWy2zl2Lu3Is0JgrWirsTRcU/aa7R78x4VPKF0WVn7w=='),
          auth0domain: JSON.stringify('orcafit.eu.auth0.com'),
          auth0clientID: JSON.stringify('7HG6PvXW3BePnn0UzuwvwcbjsvcNg3hF'),
          auth0redirectUri: JSON.stringify('https://fitquasar.azurewebsites.net/#/'),
          auth0responseType: JSON.stringify('token id_token'),
          auth0scope: JSON.stringify('openid')

        },
      scopeHoisting: true,
      vueRouterMode: 'hash',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QItemTile',
        'QSlider',
        'QSelect',
        'QSearch',
        'QKnob',
        'QTab',
        'QTabs',
        'QTabPane',
        'QRouteTab',
        'QChip',
        'QToggle',
        'QDatetime',
        'QInput',
        'QField',
        'QScrollArea',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QPopover',
        'QPageSticky',
        'QDatetimePicker',
        'QCollapsible'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'ActionSheet',
        'Dialog',
        'Notify'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.0'
  }
}
