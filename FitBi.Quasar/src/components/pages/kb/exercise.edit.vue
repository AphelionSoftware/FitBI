<template>
   <!-- Navigation -->
   <q-layout>
     <div slot="toolButtons"> <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa-close" />
    </q-btn>
     </div>
 <div class="layout-padding">   
   <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet">
     <q-select float-label="Exercise type" 
     :value="ExerciseTypeName" 
     :options="Get_ExerciseType_Select" 
     :searchable="true" 
     v-model="ExerciseTypeName"
     @input="setExerciseTypeID"></q-select>
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
import { mapState, mapGetters } from 'vuex'

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
    ...mapState(
      'Exercise', ['ExerciseType']
    ),
    ...mapGetters(
      'Exercise', ['Get_ExerciseType_Select']
    ),
    editor () {
      return this.$refs.quillExercise.quill
    },
    ExerciseTypeName: function () {
      let store = this.$store
      if (typeof store.getters['Exercise/Get_Exercise_Item'] !== 'undefined' &&
          typeof store.getters['Exercise/Get_Exercise_Item'].ExerciseTypeID !== 'undefined' &&
          typeof store.getters['Exercise/Get_ExerciseType_ByExerciseTypeID'](store.getters['Exercise/Get_Exercise_Item'].ExerciseTypeID) !== 'undefined') {
        let ret = store.getters['Exercise/Get_ExerciseType_ByExerciseTypeID'](store.getters['Exercise/Get_Exercise_Item'].ExerciseTypeID).Name
        return ret
      }
      else {
        return ''
      }
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
      let exercise = this.$store.getters['Exercise/Get_Exercise_Item']
      exercise.Description = html
      this.$store.commit('Exercise/SET_EXERCISEITEM', exercise)
    },
    saveAction () {
      this.$store.dispatch('Exercise/saveExercise', this.$store.state.Exercise.ExerciseItem)
    },
    setExerciseTypeID (exerciseTypeID) {
      let exercise = this.$store.getters['Exercise/Get_Exercise_Item']
      exercise.ExerciseTypeID = exerciseTypeID
      this.$store.commit('Exercise/SET_EXERCISE_ITEM', exercise)
    }
  },
  data () {
    return {
      selectOptions: ['bw', 'kb'],
      value: 'Stretches',
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<!-- <style src='/src/static/css/quill.snow.css'></style>-->
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
