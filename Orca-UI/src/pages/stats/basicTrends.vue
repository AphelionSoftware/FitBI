<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-card>
     <q-card-title>
      Body weight
    </q-card-title>
    <q-card-main>
      <vue-trend
        :data="weights"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card>
  <q-card>
     <q-card-title>
      Body Fat Estimate
    </q-card-title>
    <q-card-main>
      <vue-trend
        :data="bodyFatEstimate"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card>
  <q-card>
     <q-card-title>
      Waist to Hip Ratio
    </q-card-title>
    <q-card-main>
      <vue-trend
        :data="whr"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card>
  </div>
   </q-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import vueTrend from 'vuetrend'
import _ from 'underscore'
export default {
  components: {
    vueTrend
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      'statsDates': 'Stats/Get_DailyMeasurement_Dates'
    }),
    statsDatesReverse () {
      return _.sortBy(this.statsDates, 'MeasurementDateID').reverse()
    },
    weights () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('Weight')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    },
    whr () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('WHR')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    },
    bodyFatEstimate () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('BodyFatEstimate')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    }
  }
}
</script>
<style scoped>
 i.q-icon.fa.fa-edit {
  font-size: 12px
}
</style>
