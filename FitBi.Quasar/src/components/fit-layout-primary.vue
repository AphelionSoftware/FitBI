<template>
   <!-- Navigation -->
   <q-layout ref="primary_layout">
    <q-toolbar slot="header">
    <q-btn flat @click="$refs.primary_layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Orca
      <span slot="subtitle"> Private pre-alpha only</span>
    </q-toolbar-title>
    <!-- <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa-square" />
    </q-btn> -->
     <!-- <q-fixed-position corner="top-right" :offset="[18, 24]"> -->
      <q-btn v-if="typeof this.SaveAction === 'function'" @click="fnSaveAction" icon="fa-save" round small color="secondary" style='height:34xp;width:34;margin-top:2px;margin-botton:2px'/>
      <q-btn v-if="typeof this.AddAction === 'function'" @click="fnAddAction" icon="fa-plus" round small color="secondary" style='height:34xp;width:34;margin-top:2px;margin-botton:2px'/>
    <!-- </q-fixed-position> -->
  </q-toolbar>
    <div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Daily</q-list-header>
      <q-side-link item to="/record/weigh-in">
        <q-item-side icon="fa-balance-scale" />
        <q-item-main label="Weigh-in" />
      </q-side-link>
      <q-side-link item to="/record/workout">
        <q-item-side icon="directions run" />
        <q-item-main label="Workout"  />
      </q-side-link>
      <q-side-link item to="/record/eat">
        <q-item-side icon="fa-cutlery" />
        <q-item-main label="Log meal"  />
      </q-side-link>
      <q-list-header>Program</q-list-header>
      <q-side-link item to="/program/calendar">
        <q-item-side icon="fa-calendar" />
        <q-item-main label="Calendar" />
      </q-side-link>      
      <q-list-header>Knowledge Base</q-list-header>
      <q-side-link item to="/kb/exercises">
        <q-item-side icon="directions bike" />
        <q-item-main label="Exercises" />
      </q-side-link>      
      <q-side-link item to="/kb/exerciseTypes">
        <q-item-side icon="fitness center" />
        <q-item-main label="Exercise Types" />
      </q-side-link>      
     <q-list-header>Reports</q-list-header>
      <q-side-link item to="/kb/exercises">
        <q-item-side icon="timeline" />
        <q-item-main label="Stats" />
      </q-side-link>      
      <q-side-link item to="/kb/exercises">
        <q-item-side icon="multiline chart" />
        <q-item-main label="Workouts" />
      </q-side-link>      
      
     </q-list>
     <div slot="right">

       </div>
  </div>
  <router-view/>
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
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // initializing for second tab to be selected by default
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    ...mapState(
      'AppState', ['SaveAction', 'AddAction']
    )
  }),
  methods: {
    fnSaveAction: function () {
      this.$store.getters['AppState/Save']()
    },
    fnAddAction: function () {
      this.$store.getters['AppState/Add']()
    }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
