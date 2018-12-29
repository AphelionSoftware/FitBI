<template>
      <div class="layout-padding">
   <q-input v-model="item.Code" stack-label="Code" @change="update"/>
   <q-input v-model="item.Name" stack-label="Name"  @change="update"/>
   <q-input v-model.lazy="item.Description" stack-label="Description" type="textarea"/>
    </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
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
        this.item = newVal
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
      this.item.Description = html
      this.update()
    },
    update () {
      this.$emit('input', this.item)
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<!-- <style src='/src/static/css/quill.snow.css'></style>-->
// <style lang="scss" scoped>
//   .quill-code {
//     border: none;
//     height: auto;
//     > code {
//       width: 100%;
//       margin: 0;
//       padding: 1rem;
//       border: 1px solid #ccc;
//       border-top: none;
//       border-radius: 0;
//       height: 10rem;
//       overflow-y: auto;
//       resize: vertical;
//     }
//   }
// </style>
