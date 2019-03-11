import {ActionSheet} from 'quasar'
const saveAction = function (next, fnSave) {
  ActionSheet.create({
    title: 'Save action',
    gallery: true,
    actions: [
      {
        label: 'Save and exit',
        // Choose one of the following two:
        icon: 'fa fa-save', // specify ONLY IF using icon
        handler: function () {
          // store.dispatch('DailyMeasurement/Save_DailyMeasurement')
          fnSave()
          next()
        }
      },
      {
        label: 'Save but stay',
        icon: 'fa fa-bookmark',
        handler: function () {
          // store.dispatch('DailyMeasurement/Save_DailyMeasurement')
          fnSave(false)
          next(false)
        }
      },
      {
        label: 'Cancel',
        icon: 'fa fa-ban',
        handler: function () {
          next(false)
        }
      },
      {
        label: 'Exit without saving',
        icon: 'fa fa-times-circle',
        handler: function () {
          next()
        }
      }
    ],
    // optional:
    dismiss: {
      // tell what to do when Action Sheet
      // is dismissed (doesn't trigger when
      // any of the actions above are clicked/tapped)
      handler: function () {
        // console.log('Cancelled...')
        next(false)
      }
    }
  })
}
export default saveAction
