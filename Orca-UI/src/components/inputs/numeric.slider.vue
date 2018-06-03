<template>
<div class="row no-wrap">
<div class="column">
  <q-btn @click="adjustValue(-1)" round color="secondary" icon="fa-minus-circle" size="xs" class="q-ma-xs"/>
  <q-btn v-if="this.adjustment > 0" @click="adjustValue(adjustment * -1)"  round color="secondary" icon="fa-minus-circle" size="xs" class="q-ma-xs"/>
  <!--<q-btn round color="secondary" icon="fa-minus-circle" size="xs" class="q-ma-xs"/>-->
</div>
<q-slider color="primary"
            v-model="numberValue"
            :min="min"
            :max="max"
            label-always
            @input="updateValue()"
            :decimals="1"
        />

<div class="column">
    <q-btn @click="adjustValue(1)"  round color="secondary" icon="fa-plus-circle" size="xs" class="q-ma-xs" />
  <q-btn v-if="this.adjustment > 0" @click="adjustValue(adjustment)"  round color="secondary" icon="fa-plus-circle"   size="xs" class="q-ma-xs"/>
  <!--<q-btn round color="secondary" icon="fa-plus-circle"   size="xs" class="q-ma-xs"/>-->

</div>
</div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    adjustment: {
      type: Number,
      required: false,
      default: 1
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    }
  },
  data: function () {
    return {
      edited: false,
      numberValue: this.value
    }
  },
  watch: {
    value: function (val) {
      this.numberValue = val
    }
  },
  methods: {
    updateValue: function () {
      // this.value = this.numberValue
      this.$emit('input', this.numberValue)
    },
    adjustValue: function (val) {
      this.numberValue += val
      this.numberValue = Math.round(this.numberValue * 10) / 10
      this.updateValue()
    }
  }
}

</script>
