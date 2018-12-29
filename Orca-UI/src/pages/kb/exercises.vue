<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-list>
       <q-list-header>Exercises</q-list-header>
        <q-item v-for="(Exercise, index) in exercises" :key=index>
            <!--<q-icon class='cursor-pointer' name="edit" @click="$router.push('/kb/exercise.edit/'+ Exercise.ExerciseID)"/>
            <q-item-main :label=Exercise.Name>
                <q-item-tile sublabel>
                </q-item-tile>
            </q-item-main>
            -->
            <q-btn icon="fa-edit" name="edit" @click="$router.push('/kb/exercise.edit/'+ Exercise.ExerciseID)">
            <q-item-main :label=Exercise.Name></q-item-main>
            </q-btn>
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

import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      'exercises': state => state.Exercise.Exercise
    })
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
      router.push({name: 'editExercise', params: { exerciseid: '0' }})
    }
    this.$store.commit('AppState/SET_ADD', fnAdd)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_ADD')
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
