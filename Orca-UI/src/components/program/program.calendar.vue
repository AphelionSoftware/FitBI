<template>
<div>
    <calendar
    :allow-editing="false"
    />
</div>
</template>
<script>

// import { Calendar } from 'quasar-calendar'
import { Calendar } from '../../../../../quasar-calendar/src/components/calendar'
export default {
  components: {
    Calendar
  },
  props: {
    value: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      item: {}
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {
          }
        } else {
          this.item = newVal
        }
      }
    }
  },
  computed: {
    // editor () {
    //   return this.$refs.quillExerciseType.quill
    // }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.update()
    },
    update () {
      this.$emit('input', this.item)
    }
  }
}
</script>
