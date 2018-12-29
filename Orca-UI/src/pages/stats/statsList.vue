<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-list>
       <q-list-header>Measurements</q-list-header>
        <q-item v-for="(Date, index) in statsDatesReverse" :key=index class="row">
            <!--<q-icon class='cursor-pointer' name="edit" @click="$router.push('/kb/exercise.edit/'+ Exercise.ExerciseID)"/>
            <q-item-main :label=Exercise.Name>
                <q-item-tile sublabel>
                </q-item-tile>
            </q-item-main>
            -->
            <q-item-side left>
              <q-chip class="q-pa-xs" style="min-width:275px">
                <q-btn round size="sm" class="q-pa-sm" icon="fa fa-edit" name="edit"
                @click="$router.push('/stats/measurement.edit/'+ Date.MeasurementDateID)"
                color="light"
                />
                {{Date.MeasurementDateDisplay}}
                <span style="padding-left:24px;" class="on-right">
                  <q-icon class="o-xsmall" v-if="Date.Weight !== 91" name="fa fa-balance-scale"/>
                  <q-icon class="o-xsmall" v-if="Date.NeckCircumference !== 0 && Date.BellyButtonCircumference !== 0" name="compare_arrows"/>
                </span>
              </q-chip>
            </q-item-side>
              <!--<q-item-tile avatar>
                <q-btn icon="fa-edit" name="edit" @click="$router.push('/stats/measurement.edit/'+ Date.MeasurementDateID)"/>
              </q-item-tile>
            </q-item-side> -->
            <!-- <q-item-main :label="Date.MeasurementDateDisplay" class="q-pa-sm">
            </q-item-main> -->
             <!-- <q-item-side right>
              <q-item-tile v-if="Date.Weight !== ''" icon="fa fa-balance-scale"/>
              <q-item-tile v-if="Date.icnTape !== ''" icon="fa-th-list"/>
            </q-item-side> -->
        </q-item>
   </q-list>
  </div>
   </q-layout>
</template>
<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.
// import { QKnob, QBtn, QIcon } from 'quasar'
// import { QKnob, QIcon, QBtn } from 'quasar'
// import { QTab, QTabs, QTabPane } from 'quasar'

import { mapGetters } from 'vuex'
import _ from 'underscore'
export default {
  methods: {
  },
  computed: {
    ...mapGetters({
      'statsDates': 'Stats/Get_DailyMeasurement_Dates'
    }),
    statsDatesReverse () {
      return _.sortBy(this.statsDates, 'MeasurementDateID').reverse()
    }
  },
  created () {
  },
  mounted () {
    // this.$API.Initialize()
    // Set the add action to enable the toolbar add button
    // var store = this.$store
    let router = this.$router
    let fnAdd = function () {
      // store.dispatch('Exercise/saveExercise', store.state.Exercise.ExerciseItem)
      // named route
      let date = new Date()
      let dateid = (date.getFullYear() * 10000) + ((date.getMonth() + 1) * 100) + date.getDate()
      router.push({name: 'dailymeasurementedit', params: { measurementdateid: '' + dateid }})
    }
    this.$store.commit('AppState/SET_ADD', fnAdd)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_ADD')
  }
}
</script>
<style scoped>
 i.q-icon.fa.fa-edit {
  font-size: 12px
}
</style>
