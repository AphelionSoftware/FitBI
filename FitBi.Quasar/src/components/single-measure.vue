<template>
  <div class="row justify-around">
      <div style="text-align:left;padding-top:6px">
          <slot></slot>
      </div>
      <q-chip color="primary">{{value}} {{unit}}</q-chip>
      </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['value', 'unit']
}
</script>

<style>
</style>
