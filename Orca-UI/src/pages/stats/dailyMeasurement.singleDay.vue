<template>
   <!-- Navigation -->

   <q-layout>

 <div class="layout-padding">
   <q-list inset-separator class="no-border">
    <q-item>
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
    <q-item>
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
    <q-item>
        <q-item-main label="Belly-button">
        <q-item-tile sublabel>
          <numeric-slider color="primary"
            v-model="dailymeasurement.BellyCircumference"
            :min="0"
            :max="145"
            :adjustment="0.5"
        />
        </q-item-tile>
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
        BellyCircumference: 0,
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
    loaded: function (val) {
      if (this.edited !== true) {
        this.fetchStats()
      }
    }
  },
  computed: {
    ...mapGetters(
      'Stats', ['DailyMeasurement',
        'Get_Flags',
        'Get_DailyMeasurement_Dates']
    ),
    loaded () {
      return this.Get_Flags.loaded
    }
  },
  mounted () {
    this.$API.Initialize()
    // var store = this.$store
    var localVue = this
    var store = this.$store
    let fnSave = function () {
      let payload = {...localVue.Get_DailyMeasurement_Dates[localVue.measurementdateid], ...localVue.dailymeasurement}
      if (typeof payload.MeasurementDate === 'undefined' || payload.MeasurementDate === null) payload.MeasurementDate = localVue.fnDt(localVue.measurementdateid)
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
    this.$store.commit('AppState/SET_TITLETEXT', this.fnDt(this.measurementdateid).toISOString().substr(0, 10))
    this.fetchStats()
    // store.dispatch('DailyMeasurement/Set_NewDailyMeasurement')
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
    this.$store.commit('AppState/CLEAR_TITLETEXT')
  },
  methods: {
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
        this.dailymeasurement.BellyCircumference = stats.BellyButtonCircumference
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
