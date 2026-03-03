<template>
  <q-page class="layout-padding docs-tab-pane row justify-center">
    <q-tabs v-model="selectedTab" color="primary" align="justify">
      <q-tab name="tab-weight" icon="scale" />
      <q-tab name="tab-body" icon="accessibility" />
      <q-tab name="tab-other" />
    </q-tabs>
    <q-tab-panels v-model="selectedTab" animated>
      <q-tab-panel name="tab-weight">
        <!-- Weight measurements panel -->
      </q-tab-panel>
      <q-tab-panel name="tab-body">
        <!-- Body measurements panel -->
      </q-tab-panel>
      <q-tab-panel name="tab-other">
        <!-- Other measurements panel -->
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FitMeasurementsPage',

  setup () {
    const selectedTab = ref('tab-weight')
    return { selectedTab }
  }
}
</script>
