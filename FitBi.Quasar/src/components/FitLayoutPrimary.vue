<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>Fit-Track</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Daily</q-item-label>
        <q-item clickable :to="'/record/weigh-in'">
          <q-item-section avatar>
            <q-icon name="scale" />
          </q-item-section>
          <q-item-section>Weigh-in</q-item-section>
        </q-item>
        <q-item clickable :to="'/record/workout'">
          <q-item-section avatar>
            <q-icon name="directions_run" />
          </q-item-section>
          <q-item-section>Workout</q-item-section>
        </q-item>
        <q-item clickable :to="'/record/eat'">
          <q-item-section avatar>
            <q-icon name="restaurant" />
          </q-item-section>
          <q-item-section>Log meal</q-item-section>
        </q-item>
        <q-item-label header>Program</q-item-label>
        <q-item clickable :to="'/program/calendar'">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>Calendar</q-item-section>
        </q-item>
        <q-item-label header>Knowledge Base</q-item-label>
        <q-item clickable :to="'/kb/exercises'">
          <q-item-section avatar>
            <q-icon name="directions_bike" />
          </q-item-section>
          <q-item-section>Exercises</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FitLayoutPrimary',

  setup () {
    const leftDrawerOpen = ref(false)
    return { leftDrawerOpen }
  }
}
</script>
