import saveAction from './saveAction'
let uiMixin = {
  methods: {
    uiSaveAction (next, fnSave) {
      saveAction(next, fnSave)
    }
  }
}

export default uiMixin
