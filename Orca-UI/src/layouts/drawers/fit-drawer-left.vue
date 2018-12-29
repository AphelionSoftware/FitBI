<template>
<q-layout-drawer side="left" v-model="value">
    <q-list no-border link inset-separator>
      <q-list-header>Daily</q-list-header>
      <q-item to="/record/weigh-in">
        <q-item-side icon="fa-balance-scale" />
        <q-item-main label="Weigh-in" />
      </q-item>
      <q-item to="/record/workout">
        <q-item-side icon="directions run" />
        <q-item-main label="Workout"  />
      </q-item>
      <q-item to="/record/eat">
        <q-item-side icon="fa-cutlery" />
        <q-item-main label="Log meal"  />
      </q-item>
      <q-item to="/stats/dailyMeasurements">
        <q-item-side icon="fa-ruler-combined" />
        <q-item-main label="Stats List" />
      </q-item>
      <q-list-header>Program</q-list-header>
      <q-item to="/program/calendar">
        <q-item-side icon="fa-calendar" />
        <q-item-main label="Calendar" />
      </q-item>
      <q-list-header>Knowledge Base</q-list-header>
      <q-item to="/kb/exercises">
        <q-item-side icon="directions bike" />
        <q-item-main label="Exercises" />
      </q-item>
      <q-item to="/kb/exerciseTypes">
        <q-item-side icon="fitness center" />
        <q-item-main label="Exercise Types" />
      </q-item>
     <q-list-header>Reports</q-list-header>
      <q-item to="/stats/timeList">
        <q-item-side icon="timeline" />
        <q-item-main label="Stats" />
      </q-item>
      <q-item to="/kb/exercises">
        <q-item-side icon="multiline chart" />
        <q-item-main label="Workouts" />
      </q-item>
      <q-list-header>Admin</q-list-header>
      <q-item @click.native="clearLocalStorage()">
        <q-item-side icon="delete" />
        <q-item-main label="Clear local storage" />
      </q-item>
     </q-list>
    </q-layout-drawer>
</template>
<script>
export default {
//   data: function () {
//     return {
//       left: true
//     }
  props: {
    value: {
      type: Boolean,
      required: true,
      default: true
    }
  }
}
</script>
