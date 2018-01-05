<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding docs-tab-pane row justify-center">
   <q-tabs  color="primary" align="justify" slot="navigation" v-model="selectedTab">
    <q-tab slot="title" name="tab-weight" icon="fa-balance-scale" />
    <q-tab slot="title" name="tab-" icon="about_box" />
    <q-tab slot="title" name="tab-3" />
     <!-- <q-tab-pane name="tab-weight"><fit-weight/>
      </q-tab-pane>
      <q-tab-pane name="tab-workout">Tab Two</q-tab-pane>
      <q-tab-pane name="tab-3">Tab Three</q-tab-pane>-->
      <q-route-tab
    icon="fa-balance-scale"
    to="/weight"
    exact
    slot="title"    
  />
  <q-route-tab
    icon="directions-run"
    to="/weight"
    exact
    slot="title"
  />-->
    </q-tabs>
  </div>

    <!--<div slot="left">
    <q-list no-border link inset-separator>
      <q-list-header>Daily</q-list-header>
      <q-side-link item to="/weight">
        <q-item-side icon="fa-balance-scale" />
        <q-item-main label="Weigh-in" />
      </q-side-link>
      <q-side-link item to="/weight">
        <q-item-side icon="directions-run" />
        <q-item-main label="Workout"  />
      </q-side-link>
      <q-side-link item to="/weight">
        <q-item-side icon="fa-cutlery" />
        <q-item-main label="Log meal"  />
      </q-side-link>
      <q-side-link item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-side-link>
    </q-list>
  </div>-->
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
