<template>
   <!-- Navigation -->

   <q-layout>

 <div class="layout-padding">
   <q-list inset-separator class="no-border">
    <q-item>
        <q-item-main label="Weight">
        <q-item-tile sublabel>
        <q-slider color="primary"
            v-model="Weight"
            :min="minWeight"
            :max="maxWeight"
            label-always
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
  </q-list>
</div>
</q-layout>

</template>

<script>
import { mapGetters } from 'vuex'
import uiMixin from '../../mixins/ui/ui'
export default {
  props: {
    exerciseid: {
      type: String,
      required: true
    }
  },
  mixins: [uiMixin],
  computed: {
    ...mapGetters({
      'statsDates': 'Stats/Get_MeasurementDates'
    })
  },
  created () {
  },
  mounted () {
    this.$API.Initialize()
    this.$store.dispatch('Stats/Set_StatsItem_ByMeasurementDate')
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
