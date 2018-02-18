<template>
   <!-- Navigation -->
   <q-layout>
     <div slot="toolButtons"> <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa-close" />
    </q-btn>
     </div>
 <div class="layout-padding">   
   <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet">
   <q-input v-model="Code" stack-label="Code" />
   <q-input v-model="Name" stack-label="Name" />   
   <!--<q-input v-model.lazy="Description" stack-label="Description" type="textarea"/>-->
    <quill-editor class="editor-example bubble"
                      ref="quillExercise"
                      :content="Description"
                      :options="editorOption"
                      @change="onEditorChange($event)">
        </quill-editor>
   
    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import { mapFields } from '../../../helpers/vuex-map-fields/index'
// import hljs from 'highlight.js'
import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
import VueQuillEditor, { Quill } from 'vue-quill-editor'
import Vue from 'vue'
import uiMixin from '../../../mixins/ui/ui'
// import { ImageDrop } from 'quill-image-drop-module'

Vue.use(VueQuillEditor, {
  components: {Quill}
})

export default {
  props: {
    exerciseid: {
      type: String,
      required: true
    }
  },
  mixins: [uiMixin],
  computed: {
    ...mapFields({
      Name: 'Exercise.ExerciseItem.Name',
      Code: 'Exercise.ExerciseItem.Code',
      Description: 'Exercise.ExerciseItem.Description'
    }),
    editor () {
      return this.$refs.quillExercise.quill
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
      // debugger
      this.$store.commit('Exercise/SET_EXERCISEITEM_DESCRIPTION', html)
    },
    saveAction () {
      this.$store.dispatch('Exercise/saveExercise', this.$store.state.Exercise.ExerciseItem)
    }
  },
  data () {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            /* ['blockquote', 'code-block'], */
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            /* [{ 'script': 'sub' }, { 'script': 'super' }], */
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            /* [{ 'header': [1, 2, 3, 4, 5, 6, false] }], */
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    if (typeof this.$store.state.Exercise.ExerciseItem === 'undefined' ||
      typeof (this.$store.state.Exercise.ExerciseItem.ExerciseID) === 'undefined' ||
    this.$_.isEqual(this.$store.state.Exercise.Exercise[this.$store.state.Exercise.ExerciseItem.ExerciseID],
      this.$store.state.Exercise.ExerciseItem)) {
      next()
    }
    else {
      // this.testEmpty()
      var store = this.$store
      let fnSave = function () {
        store.dispatch('Exercise/saveExercise', store.state.Exercise.ExerciseItem)
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    Vue.$API.Initialize()
    let payload = {
      ExerciseID: this.exerciseid
    }
    this.$store.commit('Exercise/GET_EXERCISE', payload)
    // Set the save action to enable the toolbar save button
    var store = this.$store
    let fnSave = function () {
      store.dispatch('Exercise/saveExercise', store.state.Exercise.ExerciseItem)
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
<style lang="scss">
@import '/src/static/css/quill.snow.css'
</style>
<style lang="scss" scoped>
  .quill-code {
    border: none;
    height: auto;
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-radius: 0;
      height: 10rem;
      overflow-y: auto;
      resize: vertical;
    }
  }
</style>
