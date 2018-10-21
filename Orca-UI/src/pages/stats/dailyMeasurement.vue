<template>
   <!-- Navigation -->
   <q-layout>
    <div class="layout-padding">
      <measurement v-model="dailyMeasurement" :previousMeasurement="previousMeasurement"/>
    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import { ActionSheet } from 'quasar'
import measurement from 'src/components/stats/dailyMeasurement.basic'
import { mapGetters, mapMutations } from 'vuex'
import moment from 'moment'
import _ from 'underscore'
export default {
  components: {
    measurement
  },
  props: {
    measurementDate: {
      type: Date,
      required: true
    }
  },
  data:
    function () {
      return {
        dailyMeasurement: {},
        previousMeasurement: {},
        minNeck: 0,
        maxNeck: 100,
        minBelly: 150,
        maxBelly: 0,
        minWeight: 0,
        maxWeight: 150
      }
    },
  watch: {
    measurementDate: {
      immmediate: true,
      handler: function (newVal, oldVal) {
        // this.dailyMeasurement = this.Get_DailyMeasurements[moment(newVal).format('YYYYMMDD')]
        this.setMeasurements(newVal)
        this.SET_TITLETEXT(moment(newVal).format('DD MMM YYYY'))
      }
    },
    Get_DailyMeasurement_Dates: {
      immmediate: true,
      handler: function (newVal, oldVal) {
        this.setMeasurements(this.measurementDate)
      }
    },
    Get_Current_Person: {
      immmediate: true,
      handler: function (newVal, oldVal) {
        this.setMeasurements(this.measurementDate)
      }
    }
  },
  computed: {
    ...mapGetters('Stats',
      ['Get_DailyMeasurement_Dates',
        'Get_Current_Person'])
  },
  mounted () {
    this.$API.Initialize()
    var store = this.$store
    var localVue = this
    let fnSave = function () {
      store.dispatch('Stats/Save_DailyMeasurement', this.DailyMeasurement).then(results => {
        localVue.notify({
          html: 'Measurements saved',
          icon: 'fa-thumbs-up',
          timeout: 2400,
          color: '#99d8c9',
          bgColor: 'white'
        })
      })
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
    // store.dispatch('DailyMeasurement/Set_NewDailyMeasurement')
    // let dm = this.Get_DailyMeasurements[moment(this.measurementDate).format('YYYYMMDD')]
    // if (typeof dm !== 'undefined') {
    //   this.dailyMeasurement = dm
    // }
    this.SET_TITLETEXT(moment(this.measurementDate).format('DD MMM YYYY'))
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  },
  methods: {
    ...mapMutations('AppState', [
      'SET_TITLETEXT']),
    setMeasurements (measurementDate) {
      if (typeof this.Get_DailyMeasurement_Dates !== 'undefined') {
        let dm = this.Get_DailyMeasurement_Dates[moment(measurementDate).format('YYYYMMDD')]
        if (typeof dm !== 'undefined') {
          this.dailyMeasurement = dm
        }
        let prev = _.chain(this.Get_DailyMeasurement_Dates)
          .filter(item => {
            return item.MeasurementDateID < +moment(measurementDate).format('YYYYMMDD')
          })
          .sortBy('MeasurementDateID')
          .last()
          .value()
        if (typeof prev !== 'undefined') {
          this.previousMeasurement = prev
        }
        if (typeof this.Get_Current_Person !== 'undefined') {
          this.dailyMeasurement.Height = this.Get_Current_Person.Height
          this.previousMeasurement.Height = this.Get_Current_Person.Height
        }
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    // if (typeof (this.$store.state.Exercise.ExerciseItem.ExerciseID) === 'undefined'
    // /* ||
    // this.$_.isEqual(this.$store.state.Exercise.Exercise[this.$store.state.Exercise.ExerciseItem.ExerciseID],
    //   this.$store.state.Exercise.ExerciseItem)
    //   */
    //   ) {
    //   next()
    // }
    // else {
    let extant = this.Get_DailyMeasurement_Dates[moment(this.measurementDate).format('YYYYMMDD')]
    if (this.dailyMeasurement.Weight === extant.Weight &&
      this.dailyMeasurement.NeckCircumference === extant.NeckCircumference &&
      this.dailyMeasurement.BellyButtonCircumference === extant.BellyButtonCircumference
    ) {
      next()
    } else {
      let store = this.$store
      ActionSheet.create({
        title: 'Save action',
        gallery: true,
        actions: [
          {
            label: 'Save and exit',
            // Choose one of the following two:
            icon: 'fa-save', // specify ONLY IF using icon
            handler: function () {
              store.dispatch('DailyMeasurement/Save_DailyMeasurement')
              next()
            }
          },
          {
            label: 'Save but stay',
            icon: 'fa-bookmark',
            handler: function () {
              store.dispatch('DailyMeasurement/Save_DailyMeasurement')
            }
          },
          {
            label: 'Cancel',
            icon: 'fa-ban',
            handler: function () {
              next(false)
            }
          },
          {
            label: 'Exit without saving',
            icon: 'fa-times-circle',
            handler: function () {
              next()
            }
          }
        ],
        // optional:
        dismiss: {
          // tell what to do when Action Sheet
          // is dismised (doesn't trigger when
          // any of the actions above are clicked/tapped)
          handler: function () {
            // console.log('Cancelled...')
            next(false)
          }
        }
      })
    }
    // }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
