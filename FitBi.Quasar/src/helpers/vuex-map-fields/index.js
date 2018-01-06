import arrayToObject from './lib/array-to-object'
// import _ from 'underscore'

export function getField (state) {
  return function (path) {
    try {
      return path.split(/[.[\]]+/).reduce(function (prev, key) {
        return prev[key]
      }, state)
    }
    catch (ex) {
      console.log(path + ' has failed to be found in the store')
      // debugger
    }
  }
  // return path => path.split(/[.[\]]+/).reduce((prev, key) => prev[key], state)
}

export function updateField (state, { path, value }) {
  path.split(/[.[\]]+/).reduce((prev, key, index, array) => {
    if (array.length === index + 1) {
      // eslint-disable-next-line no-param-reassign
      prev[key] = value
    }

    return prev[key]
  }, state)
}

export function mapFields (fields, getterType = `getField`, mutationType = `updateField`) {
  // debugger
  const fieldsObject = Array.isArray(fields) ? arrayToObject(fields) : fields

  return Object.keys(fieldsObject).reduce((prev, key) => {
    // debugger
    const path = fieldsObject[key]
    const field = {
      get () {
        return this.$store.getters[getterType](path)
      },
      set (value) {
        // debugger
        this.$store.commit(mutationType, { path, value })
        /* let storeClosure = this.$store
        var fnCommit = _.debounce(function () {
          debugger
          storeClosure.commit(mutationType, { path, value })
        }, 300)
        fnCommit()
        */
      }
    }

    // eslint-disable-next-line no-param-reassign
    prev[key] = field

    return prev
  }, {})
}

export const createHelpers = ({ getterType, mutationType }) => ({
  [getterType]: getField,
  [mutationType]: updateField,
  mapFields: fields => mapFields(fields, getterType, mutationType)
})
