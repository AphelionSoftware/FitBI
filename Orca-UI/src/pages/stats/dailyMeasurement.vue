<template>
  <!-- Navigation -->
    <q-layout>
    <div class="layout-padding">
      <measurement ref="measurementComponent" v-model="dailyMeasurement" :previousMeasurement="previousMeasurement" :extantDateIDs="Get_DailyMeasurement_DateIDs"/>
    </div>
  </q-layout>
</template>
<script>
// import { required } from 'vuelidate/lib/validators'
import uiMixin from 'src/mixins/ui/ui'
// import {
//   ActionSheet
// } from 'quasar'
import measurement from 'src/components/stats/dailyMeasurement.basic'
import {
  mapGetters,
  mapMutations
} from 'vuex'
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
  mixins: [uiMixin],
  data: function () {
    return {
      dailyMeasurement: {
        Height: 250
      },
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
        this.SET_TITLEACTION(this.$refs.measurementComponent.showDatePicker)
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
    },
    dailyMeasurementDate: {
      immmediate: false,
      handler: function (newVal, oldVal) {
        /// Very special case. Override of date specifically
        if (typeof this.dailyMeasurement.MeasurementDate !== 'undefined' && this.dailyMeasurement.MeasurementDate !== null && moment(this.measurementDate).format('YYYYMMDD') !== moment(this.dailyMeasurement.MeasurementDate).format('YYYYMMDD')) {
          let localVue = this
          let resultDate = this.dailyMeasurement.MeasurementDate
          this.$store.dispatch('Stats/Save_DailyMeasurement', this.dailyMeasurement).then(results => {
            localVue.$q.notify({
              message: 'Measurements saved',
              icon: 'fa-thumbs-up',
              timeout: 2400,
              color: 'positive',
              bgColor: '#99d8c9'
            })
            let route = '/stats/measurement.edit/' + moment(resultDate).format('YYYYMMDD')
            localVue.$router.push(route)
            // this.SET_TITLETEXT(moment(this.dailyMeasurement.MeasurementDate).format('DD MMM YYYY'))
          })
        }
        // this.SET_TITLETEXT(moment(this.dailyMeasurement.MeasurementDate).format('DD MMM YYYY'))
        // this.setMeasurements(this.measurementDate)
      }
    }
  },
  computed: {
    ...mapGetters('Stats', ['Get_DailyMeasurement_Dates',
      'Get_Current_Person',
      'Get_DailyMeasurement_DateIDs'
    ]),
    dailyMeasurementDate () {
      if (typeof this.dailyMeasurement !== 'undefined') {
        return this.dailyMeasurement.MeasurementDate
      }
    }
  },
  mounted () {
    // this.$API.Initialize()
    var store = this.$store
    var localVue = this
    let fnSave = function () {
      debugger
      let payload = localVue.dailyMeasurement
      payload.MeasurementDate = localVue.measurementDate
      payload.MeasurementDateID = moment(localVue.measurementDate).format('YYYYMMDD')
      store.dispatch('Stats/Save_DailyMeasurement', payload).then(results => {
        debugger
        localVue.$q.notify({
          message: 'Measurements saved',
          icon: 'fa-thumbs-up',
          timeout: 2400,
          color: 'positive',
          bgColor: '#99d8c9'
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
      'SET_TITLETEXT',
      'CLEAR_TITLETEXT',
      'SET_TITLEACTION'
    ]),
    setMeasurements (measurementDate) {
      let vueThis = this
      if (typeof this.Get_DailyMeasurement_Dates !== 'undefined') {
        let dm = this.Get_DailyMeasurement_Dates[moment(measurementDate).format('YYYYMMDD')]
        if (typeof dm !== 'undefined') {
          _.each(Object.keys(dm), key => {
            vueThis.$set(vueThis.dailyMeasurement, key, dm[key])
          })
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
          if (typeof this.dailyMeasurement === 'undefined') {
            this.dailyMeasurement.Weight = +this.previousMeasurement.Weight
            this.dailyMeasurement.NeckCircumference = +this.previousMeasurement.NeckCircumference
            this.dailyMeasurement.BellyButtonCircumference = +this.previousMeasurement.BellyButtonCircumference
          }
        }
        if (typeof this.Get_Current_Person !== 'undefined') {
          vueThis.$set(vueThis.dailyMeasurement, 'Height', this.Get_Current_Person.Height)
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
    try {
      let dateID = +moment(this.measurementDate).format('YYYYMMDD')
      debugger
      let extant = this.Get_DailyMeasurement_Dates[dateID]
      if (typeof extant === 'undefined') {
        extant = this.previousMeasurement
      }
      if (this.dailyMeasurement.Weight === extant.Weight &&
          this.dailyMeasurement.NeckCircumference === extant.NeckCircumference &&
          this.dailyMeasurement.BellyButtonCircumference === extant.BellyButtonCircumference
      ) {
        this.CLEAR_TITLETEXT()
        next()
      } else {
        let store = this.$store
        let clearTitle = this.CLEAR_TITLETEXT
        let vueThis = this
        let fnSave = function () {
          store.dispatch('DailyMeasurement/Save_DailyMeasurement')
          vueThis.$fit.notifyPerSecond({
            html: 'Measurement saved',
            icon: 'fa-thumbs-up',
            timeout: 2400,
            color: '#99d8c9',
            bgColor: 'white'
          })
          clearTitle()
        }
        this.uiSaveAction(next, fnSave)
      }
    } catch (ex) {
      debugger
    }
    // }
  }
}
</script>
<style>
  /* This is where your CSS goes */
</style>
