<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
   <q-list>
       <q-list-header>Library</q-list-header>
        <q-item class="row">
            <q-item-side left>
              <q-chip class="q-pa-xs" style="min-width:275px">
                <q-btn round size="sm" class="q-pa-sm" icon="fa fa-calculator" name="edit"
                @click="$router.push('/stats/calculationLibrary/mub')"
                color="light"
                />
                Muscle up Baseline
              </q-chip>
            </q-item-side>
        </q-item>
   </q-list>
  </div>
   </q-layout>
</template>
<script>
export default {
  methods: {
  },
  computed: {
  },
  created () {
  },
  mounted () {
    // this.$API.Initialize()
    // Set the add action to enable the toolbar add button
    // var store = this.$store
  },
  beforeDestroy () {
  }
}
</script>
<style scoped>
 i.q-icon.fa.fa-edit {
  font-size: 12px
}
</style>
