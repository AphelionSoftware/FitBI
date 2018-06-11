<template>
   <!-- Navigation -->

   <q-layout>

 <div class="">
   <q-list inset-separator class="no-border">
    <q-item class="q-mx-sm">
        <q-item-main label="Weight">
        <q-item-tile sublabel>
        <numeric-slider color="primary"
            v-model="dailymeasurement.Weight"
            :min="0"
            :max="145"
            :adjustment="0.1"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item class="q-mx-sm">
        <q-item-main label="Neck">
        <q-item-tile sublabel>
          <numeric-slider color="primary"
            v-model="dailymeasurement.NeckCircumference"
            :min="0"
            :max="60"
            :adjustment="0.5"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item class="q-mx-sm">
        <q-item-main label="Belly-button">
        <q-item-tile sublabel>
          <numeric-slider color="primary"
            v-model="dailymeasurement.BellyButtonCircumference"
            :min="0"
            :max="145"
            :adjustment="0.5"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
      <q-item-main class="row">
        <q-card class="col">
          <q-card-title class="column">
            Body Fat %
            <q-knob slot="subtitle"
          :value="BodyFatEstimate"
          :min="0"
          :max="1"
          :color="BodyFatEstimate > .5 ? 'grey-7' : BodyFatEstimate > .4 ? 'deep-purple-11' : BodyFatEstimate > .3 ? 'red' : BodyFatEstimate > .25 ? 'deep-orange' : BodyFatEstimate > .2 ? 'amber' : BodyFatEstimate > .15 ? 'lime' : BodyFatEstimate > .1 ? 'green' : BodyFatEstimate > .05 ? 'blue-grey' : 'purple-14' "
          :readonly="true"
        >{{BFFormatted}}
        </q-knob>
          </q-card-title>
        </q-card>
        <q-card class="col">
          <q-card-title  class="column">
            Fat Free Mass
          </q-card-title>
          <q-card-main>
            <q-knob
          v-model="FFM"
          :min="0"
          :max="dailymeasurement.Weight"
          :readonly="true"
        >{{FFMFormatted}}</q-knob>
          </q-card-main>
        </q-card>
        <q-card class="col">
          <q-card-title  class="column">
            Fat Mass
          </q-card-title>
          <q-card-main>
            <q-knob
          v-model="BFM"
          :min="0"
          :max="dailymeasurement.Weight"
          :readonly="true"
        >{{BFMFormatted}}</q-knob>
          </q-card-main>
        </q-card>
        </q-item-main>
    </q-item>
    </q-list>

    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'
import numericSlider from '../../components/inputs/numeric.slider'
import numeral from 'numeral'
// import { ActionSheet } from 'quasar'
export default {
  components: {
    numericSlider
  },
  props: {
    measurementdateid: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      dailymeasurement: {
        Weight: 0,
        BellyButtonCircumference: 0,
        NeckCircumference: 0,
        BodyFatPercentage: 0
      },
      edited: false
    }
  },
  watch: {
    measurementdateid: function (val) {
      if (this.edited !== true) {
        this.fetchStats()
      }
    },
    'Get_Flags.loaded' (newVal, oldVal) {
      if (this.edited !== true) {
        this.fetchStats()
      }
    },
    'GetFlags.Saved' (newVal, oldVal) {
      if (this.GetFlags.Saved === true) {
        this.$q.notify({
          message: 'Exercise saved',
          icon: 'fa-thumbs-up',
          timeout: 2400,
          type: 'positive',
          color: 'positive'
        })
      }
    },
    'GetFlags.Failed' (newVal, oldVal) {
      if (this.GetFlags.Failed === true) {
        this.$q.notify({
          message: 'Issue saving',
          icon: 'fa-thumbs-down',
          timeout: 2400,
          type: 'negative',
          color: 'negative'
        })
      }
    }
  },
  computed: {
    ...mapGetters(
      'Stats', ['DailyMeasurement',
        'Get_Flags',
        'Get_DailyMeasurement_Dates']
    ),
    ...mapGetters(
      'AppState', ['GetFlags']
    ),
    BodyFatEstimate () {
      if (typeof this.$store.getters['Stats/Get_Person_List'][0] !== 'undefined') {
        let height = this.$store.getters['Stats/Get_Person_List'][0].Height
        let belly = this.dailymeasurement.BellyButtonCircumference
        let neck = this.dailymeasurement.NeckCircumference
        let ret = (86.01 * Math.log10((belly - neck) / 2.54) - 70.041 * Math.log10(height / 2.54) + 36.76) / 100
        return ret
      } else {
        return 1 / 0
      }
    },
    BFFormatted () {
      return numeral(this.BodyFatEstimate).format('0.00%')
    },
    FFM () {
      return this.dailymeasurement.Weight * (1 - this.BodyFatEstimate)
    },
    FFMFormatted () {
      return numeral(this.FFM).format('0.00')
    },
    BFM () {
      return this.dailymeasurement.Weight * this.BodyFatEstimate
    },
    BFMFormatted () {
      return numeral(this.BFM).format('0.00')
    }
  },
  mounted () {
    this.$API.Initialize()
    // var store = this.$store
    var localVue = this
    var store = this.$store
    let fnSave = function () {
      let payload = {...localVue.Get_DailyMeasurement_Dates[localVue.measurementdateid], ...localVue.dailymeasurement}
      if (typeof payload.MeasurementDate === 'undefined' || payload.MeasurementDate === null) {
        payload.MeasurementDate = new Date()
      } else {
        payload.MeasurementDate = payload.MeasurementDateOriginal
      }
      payload.BodyFatPercentage = localVue.BodyFatEstimate
      store.dispatch('Stats/saveDailyMeasurement', payload)
      // localVue.$q.notify({
      //   html: 'Measurements saved',
      //   icon: 'fa-thumbs-up',
      //   timeout: 2400,
      //   color: '#99d8c9',
      //   bgColor: 'white'
      // })
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
    let today = this.Get_DailyMeasurement_Dates[localVue.measurementdateid]
    if (typeof today !== 'undefined') {
      today = today.MeasurementDate.substr(0, 10)
    } else {
      today = this.fnDt(this.measurementdateid).toLocaleDateString()
    }
    this.$store.commit('AppState/SET_TITLETEXT', today)
    this.fetchStats()
    // store.dispatch('DailyMeasurement/Set_NewDailyMeasurement')
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
    this.$store.commit('AppState/CLEAR_TITLETEXT')
  },
  methods: {
    failed () {
      return this.GetFlags.Failed
    },
    saved () {
      return this.GetFlags.Saved
    },
    /// TODO: Move this to an Orca Util
    fnDt: function (intDate) {
      let year = Math.round(intDate / 10000)
      let month = Math.round((intDate - (year * 10000)) / 100)
      let day = intDate - (year * 10000) - (month * 100)
      return new Date(year, month - 1, day)
    },
    fetchStats: function () {
      let stats = this.Get_DailyMeasurement_Dates[this.measurementdateid]
      if (typeof stats !== 'undefined') {
        this.dailymeasurement.Weight = stats.Weight
        this.dailymeasurement.BellyButtonCircumference = stats.BellyButtonCircumference
        this.dailymeasurement.NeckCircumference = stats.NeckCircumference
        this.dailymeasurement.BodyFatPercentage = stats.BodyFatPercentage
      } else {
        let x = this.$store.getters['Stats/Get_Flags']
        let y = x
        x = y
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
