<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-list>
       <q-list-header>Exercises</q-list-header>
        <q-item v-for="(Name, index) in exercises" :key=index>
            <q-item-main label="Weight">
                <q-item-tile sublabel>
                </q-item-tile>
            </q-item-main>
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
export default {
  computed: {
    ...mapGetters({
      'exercises': 'Exercise/Get_Exercise'
    })
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
