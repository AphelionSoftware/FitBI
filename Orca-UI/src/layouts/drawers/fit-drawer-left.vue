<template>
<q-layout-drawer ref="left" side="left" v-model="internalValue" @input="updateValue">
    <q-list no-border link inset-separator>
      <q-list-header>Daily</q-list-header>
      <q-item :to="'/stats/measurement.edit/' + todayid">
        <q-item-side icon="fa fa-balance-scale" />
        <q-item-main label="Weigh-in" />
      </q-item>
      <q-item :to="'/stats/measurement.sets/' + todayid">
        <q-item-side icon="fa fa-calculator" />
        <q-item-main label="Add measurements" />
      </q-item>
      <q-item v-if="config.PROD === false" to="/record/workout">
        <q-item-side icon="directions run" />
        <q-item-main label="Workout"  />
      </q-item>
      <q-item v-if="config.PROD === false"  to="/record/eat">
        <q-item-side icon="fa fa-cutlery" />
        <q-item-main label="Log meal"  />
      </q-item>
      <q-item to="/stats/dailyMeasurements">
        <q-item-side icon="fa fa-ruler-combined" />
        <q-item-main label="Stats List" />
      </q-item>
      <q-item v-if="config.PROD === false" to="/stats/calculationLibrary">
        <q-item-side icon="fa fa-book-reader" />
        <q-item-main label="Calculation library" />
      </q-item>
      <q-list-header>Program</q-list-header>
      <q-item v-if="config.PROD === false" to="/program/calendar">
        <q-item-side icon="fa fa-calendar" />
        <q-item-main label="Calendar" />
      </q-item>
      <q-list-header>Knowledge Base</q-list-header>
      <q-item  v-if="config.PROD === false" to="/kb/exercises">
        <q-item-side icon="directions bike" />
        <q-item-main label="Exercises" />
      </q-item>
      <q-item v-if="config.PROD === false"  to="/kb/exerciseTypes">
        <q-item-side icon="fitness center" />
        <q-item-main label="Exercise Types" />
      </q-item>
     <q-list-header>Reports</q-list-header>
      <q-item to="/stats/basictrends">
        <q-item-side icon="timeline" />
        <q-item-main label="Stats" />
      </q-item>
      <q-item v-if="config.PROD === false"  to="/kb/exercises">
        <q-item-side icon="multiline chart" />
        <q-item-main label="Workouts" />
      </q-item>
      <q-list-header>Admin</q-list-header>
      <q-item @click.native="clearLocalStorage()">
        <q-item-side icon="delete" />
        <q-item-main label="Clear local storage" />
      </q-item>
      <q-item v-if="config.PROD === false" @click.native="fnDebug()">
        <q-item-side icon="fa fa-calendar" />
        <q-item-main label="Driver" />
      </q-item>
     </q-list>
    </q-layout-drawer>
</template>
<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
// import {fnIntro} from '../driver/intro' /// TODO
export default {
  data () {
    return {
      internalValue: this.value
    }
  },
  computed: {
    todayid () {
      let ret = moment(new Date()).format('YYYYMMDD')
      return ret
    },
    ...mapGetters({
      'config': 'AppState/Get_Config'
    })
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newVal, oldVal) {
        this.internalValue = newVal
      }
    }
  },
  methods: {
    fnDebug  () {
      debugger
      // fnIntro()
    },
    updateValue (newVal) {
      this.internalValue = newVal
      this.$emit('input', this.internalValue)
    },
    clearLocalStorage: function () {
      this.$store.dispatch('AppState/Clear_LocalForage').then(() => {
        this.$q.notify({message: 'LocalForage cleared'})
      })
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: true
    }
  }
}
</script>
