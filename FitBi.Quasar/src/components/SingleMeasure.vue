<template>
  <div class="row justify-around">
    <div style="text-align:left;padding-top:6px">
      <slot />
    </div>
    <q-chip color="primary">
      {{ value }} {{ unit }}
    </q-chip>
  </div>
</template>

<script setup>
defineProps({
  value: { type: [Number, String], required: true },
  unit: { type: String, default: '' }
})
</script>
