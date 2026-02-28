<template>
  <q-page class="row justify-around">
    <div id="leftcolumn">
      <q-list inset-separator class="no-border">
        <q-item>
          <q-item-section label="Weight">
            <q-knob
              color="primary"
              :model-value="weightValue"
              :min="weightObj.min"
              :max="weightObj.max"
              @update:model-value="setWeight"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div id="rightcolumn" class="colRight" style="text-align:right" />
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useWeightMeasurementStore } from 'stores/weightMeasurementStore'

export default {
  name: 'FitWeightPage',

  setup () {
    const store = useWeightMeasurementStore()
    const weightValue = computed(() => store.weightValue)
    const weightObj = computed(() => store.weightObj)
    function setWeight (val) { store.setWeight(val) }
    return { weightValue, weightObj, setWeight }
  }
}
</script>

<style>
.colRight { text-align: right }
</style>
