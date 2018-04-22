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

</script>
