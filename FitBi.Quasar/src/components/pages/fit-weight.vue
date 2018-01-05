<template>
    <!-- With custom placeholder -->
<div class="row justify-around">
<div id="leftcolumn" >
    <q-list inset-separator class="no-border">
    <q-item>
        <q-item-main label="Weight">
        <q-item-tile sublabel>
        <q-knob color="primary"
            :value="weight"
            :min="weightObj.min"
            :max="weightObj.max"
            :placeholder="weightObj.model + ' kg'"            
            @change="setWeight"
        />      
        </q-item-tile>
        </q-item-main>
    </q-item>
    <!--
     
      
      <q-item>
        <q-item-main label="Neck">
        <q-item-tile sublabel>          
            <q-knob color="primary"
            v-model="neck.model"
            :min="neck.min"
            :max="neck.max"
            :placeholder="neck.model + ' cm'"
            ></q-knob>  
        </q-item-tile>  
        </q-item-main>
    </q-item>
    <q-item>

        <q-item-main label="Belly Button">
        <q-item-tile sublabel>  
           <q-knob color="primary"
            v-model="bellybutton.model"
            :min="bellybutton.min"
            :max="bellybutton.max"
            :placeholder="bellybutton.model + ' ' + bellybutton.unit"
            ></q-knob>
        </q-item-tile>
        </q-item-main>
    </q-item>-->
</q-list>
</div>

<div id="rightcolumn" class="colRight" style="align:right"> 
    <!--<q-list inset-separator class="no-border">
    <q-item>
    <q-item-main label="Body fat" />
    <q-item-side right>
      <q-chip color="primary" class="shadow-2">{{bodyfatpercent}} {{this.bodyfatunit}}</q-chip>
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-main label="Fat mass" />
    <q-item-side right>
      <q-chip color="primary" class="shadow-2">{{bodyfat}} {{this.weight.unit}}</q-chip>
    </q-item-side>
  </q-item>
    </q-list>-->
    <!--<single-measure :value="bodyfatpercent" :unit="bodyfatunit">Body fat</single-measure><br/>
    <single-measure :value="bodyfat" :unit="weight.unit">Fat weight</single-measure><br/>
    -->
    <!--<q-toggle v-model="measurementOptions.emptyStomach" label="Empty Stomach" />
    <q-datetime v-model="measurementDetail.measurementTaken" type="date" /><br/>
    <q-datetime v-model="measurementDetail.measurementTaken" type="time" /><br/>
-->
</div>

</div>
</template>
<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  computed:
  {
    ...mapGetters({
      weight: 'WeightMeasurement/weight',
      weightObj: 'WeightMeasurement/weightObj'
    }),
    ...mapState([
      'WeightMeasurement'
    ])
     // mix the getters into computed with object spread operator
  },
  methods: {
    ...mapActions({
      setWeight: 'WeightMeasurement/setWeight' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }
}
</script>
<style>
/* This is where your CSS goes */
.colRight {text-align: right}
</style>
