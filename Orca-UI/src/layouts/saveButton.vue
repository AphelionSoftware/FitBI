<template>
  <q-btn @click="debug()" icon="fa fa-save" round small color="secondary" style='height:34xp;width:34;margin-top:2px;margin-botton:2px'/>
</template>
<script>
export default {
  methods: {
    debug () {
      debugger
      this.$root.$emit('save')
    }
  }
}
</script>
