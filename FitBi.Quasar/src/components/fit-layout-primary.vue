<template>
   <!-- Navigation -->
   <q-layout ref="primary_layout">
    <q-toolbar slot="header">
    <q-btn flat @click="$refs.primary_layout.toggleLeft()">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Fit-Track
      <span slot="subtitle">Your fitness companion</span>
    </q-toolbar-title>
    <q-btn flat @click="$refs.layout.toggleRight()">
      <!--<q-icon name="fa-save" />-->
    </q-btn>
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
      
     </q-list>
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

export default {
  data () {
    return {
      // initializing for second tab to be selected by default
      selectedTab: 'tab-weight'
    }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
