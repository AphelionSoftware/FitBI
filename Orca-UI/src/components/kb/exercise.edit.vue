<template>
      <div class="layout-padding">
    <multiselect placeholder="Exercise type"
     :options="lookup"
     :searchable="true"
     :value="ExerciseType"
     @input="setExerciseTypeID"
     label="label"
     track-by="value"
     ></multiselect>
   <q-input v-model="item.Code" stack-label="Code" @change="update"/>
   <q-input v-model="item.Name" stack-label="Name"  @change="update"/>
   <q-input v-model.lazy="item.Description" stack-label="Description" type="textarea"/>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
// import hljs from 'highlight.js'
export default {
  components: {
    Multiselect
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    lookup: {
      type: Array,
      required: true
    },
    lookupObject: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      item: {},
      ExerciseType: {}
      // editorOption: {
      //   modules: {
      //     toolbar: [
      //       ['bold', 'italic', 'underline'],
      //       /* ['blockquote', 'code-block'], */
      //       [{ 'header': 1 }, { 'header': 2 }],
      //       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      //       /* [{ 'script': 'sub' }, { 'script': 'super' }], */
      //       [{ 'indent': '-1' }, { 'indent': '+1' }],
      //       [{ 'size': ['small', false, 'large', 'huge'] }],
      //       /* [{ 'header': [1, 2, 3, 4, 5, 6, false] }], */
      //       /* [{ 'font': [] }], */
      //       [{ 'color': [] }, { 'background': [] }],
      //       [{ 'align': [] }],
      //       ['clean'],
      //       ['link', 'image', 'video']
      //     ],
      //     syntax: {
      //       highlight: text => hljs.highlightAuto(text).value
      //     }
      //   }
      // }
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {}
        } else {
          this.item = newVal
          this.ExerciseType = this.lookupObject[newVal.ExerciseTypeID]
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
      this.item.Description = html
      this.update()
    },
    update () {
      this.$emit('input', this.item)
    },
    setExerciseTypeID (newItem) {
      this.item.ExerciseTypeID = newItem.value
      this.ExerciseType = this.lookupObject[this.item.ExerciseTypeID]
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
