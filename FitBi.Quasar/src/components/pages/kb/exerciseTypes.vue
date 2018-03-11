<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-list>
       <q-list-header>Exercise Types</q-list-header>
        <q-item v-for="(ExerciseType, index) in exerciseTypes" :key=index>
            <q-btn icon="fa-edit" name="edit" @click="$router.push('/kb/exerciseTypes.edit/'+ ExerciseType.ExerciseTypeID)">
            <q-item-main :label=ExerciseType.Name></q-item-main>
            </q-btn>
        </q-item>
   </q-list>
  </div>
   </q-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
export default {
  computed: {
    ...mapGetters({
      'exerciseTypes': 'Exercise/Get_ExerciseType_List'
    })
  },
  mounted () {
    Vue.$API.Initialize()
    // Set the add action to enable the toolbar add button
    let router = this.$router
    let fnAdd = function () {
      router.push({name: 'editExerciseType', params: { exercisetypeid: '0' }})
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
