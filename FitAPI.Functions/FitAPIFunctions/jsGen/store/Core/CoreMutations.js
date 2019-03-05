import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
import _ from 'underscore'
const mutations = {
  SET_ACTIVE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Active, payload.ActiveID, payload)
      localForage.setItem('Core_Active', state.Active)
    }
  },
  SET_ACTIVE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Active, element.ActiveID, element)
      }, this)
      _.each(state.Active, (item, idx) => {
        if (item.ActiveID >= 1073741824 || item.ActiveID === null) {
          let extant = _.find(state.Active, extItem => {
            return extItem.ID === item.ID && extItem.ActiveID !== item.ActiveID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.ActiveID
              let newVal = {...extant, ...item}
              newVal.ActiveID = extId
              Vue.set(state.Active, newVal.ActiveID, newVal)
              Vue.delete(state.Active, item.ActiveID)
            } else {
              Vue.delete(state.Active, item.ActiveID)
            }
          }
        }
      })

      localForage.setItem('Core_Active', state.Active)
    }
  },
  SET_BODYPART (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.BodyPart, payload.BodyPartID, payload)
      localForage.setItem('Core_BodyPart', state.BodyPart)
    }
  },
  SET_BODYPART_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPart, element.BodyPartID, element)
      }, this)
      _.each(state.BodyPart, (item, idx) => {
        if (item.BodyPartID >= 1073741824 || item.BodyPartID === null) {
          let extant = _.find(state.BodyPart, extItem => {
            return extItem.ID === item.ID && extItem.BodyPartID !== item.BodyPartID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.BodyPartID
              let newVal = {...extant, ...item}
              newVal.BodyPartID = extId
              Vue.set(state.BodyPart, newVal.BodyPartID, newVal)
              Vue.delete(state.BodyPart, item.BodyPartID)
            } else {
              Vue.delete(state.BodyPart, item.BodyPartID)
            }
          }
        }
      })

      localForage.setItem('Core_BodyPart', state.BodyPart)
    }
  },
  SET_BODYPARTTYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.BodyPartType, payload.BodyPartTypeID, payload)
      localForage.setItem('Core_BodyPartType', state.BodyPartType)
    }
  },
  SET_BODYPARTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPartType, element.BodyPartTypeID, element)
      }, this)
      _.each(state.BodyPartType, (item, idx) => {
        if (item.BodyPartTypeID >= 1073741824 || item.BodyPartTypeID === null) {
          let extant = _.find(state.BodyPartType, extItem => {
            return extItem.ID === item.ID && extItem.BodyPartTypeID !== item.BodyPartTypeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.BodyPartTypeID
              let newVal = {...extant, ...item}
              newVal.BodyPartTypeID = extId
              Vue.set(state.BodyPartType, newVal.BodyPartTypeID, newVal)
              Vue.delete(state.BodyPartType, item.BodyPartTypeID)
            } else {
              Vue.delete(state.BodyPartType, item.BodyPartTypeID)
            }
          }
        }
      })

      localForage.setItem('Core_BodyPartType', state.BodyPartType)
    }
  },
  SET_DATES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Dates, payload.DatesID, payload)
      localForage.setItem('Core_Dates', state.Dates)
    }
  },
  SET_DATES_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Dates, element.DatesID, element)
      }, this)
      _.each(state.Dates, (item, idx) => {
        if (item.DatesID >= 1073741824 || item.DatesID === null) {
          let extant = _.find(state.Dates, extItem => {
            return extItem.ID === item.ID && extItem.DatesID !== item.DatesID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.DatesID
              let newVal = {...extant, ...item}
              newVal.DatesID = extId
              Vue.set(state.Dates, newVal.DatesID, newVal)
              Vue.delete(state.Dates, item.DatesID)
            } else {
              Vue.delete(state.Dates, item.DatesID)
            }
          }
        }
      })

      localForage.setItem('Core_Dates', state.Dates)
    }
  },
  SET_MEASUREMENTTYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MeasurementType, payload.MeasurementTypeID, payload)
      localForage.setItem('Core_MeasurementType', state.MeasurementType)
    }
  },
  SET_MEASUREMENTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementType, element.MeasurementTypeID, element)
      }, this)
      _.each(state.MeasurementType, (item, idx) => {
        if (item.MeasurementTypeID >= 1073741824 || item.MeasurementTypeID === null) {
          let extant = _.find(state.MeasurementType, extItem => {
            return extItem.ID === item.ID && extItem.MeasurementTypeID !== item.MeasurementTypeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MeasurementTypeID
              let newVal = {...extant, ...item}
              newVal.MeasurementTypeID = extId
              Vue.set(state.MeasurementType, newVal.MeasurementTypeID, newVal)
              Vue.delete(state.MeasurementType, item.MeasurementTypeID)
            } else {
              Vue.delete(state.MeasurementType, item.MeasurementTypeID)
            }
          }
        }
      })

      localForage.setItem('Core_MeasurementType', state.MeasurementType)
    }
  },
  SET_MEASUREMENTTYPECATEGORY (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MeasurementTypeCategory, payload.MeasurementTypeCategoryID, payload)
      localForage.setItem('Core_MeasurementTypeCategory', state.MeasurementTypeCategory)
    }
  },
  SET_MEASUREMENTTYPECATEGORY_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementTypeCategory, element.MeasurementTypeCategoryID, element)
      }, this)
      _.each(state.MeasurementTypeCategory, (item, idx) => {
        if (item.MeasurementTypeCategoryID >= 1073741824 || item.MeasurementTypeCategoryID === null) {
          let extant = _.find(state.MeasurementTypeCategory, extItem => {
            return extItem.ID === item.ID && extItem.MeasurementTypeCategoryID !== item.MeasurementTypeCategoryID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MeasurementTypeCategoryID
              let newVal = {...extant, ...item}
              newVal.MeasurementTypeCategoryID = extId
              Vue.set(state.MeasurementTypeCategory, newVal.MeasurementTypeCategoryID, newVal)
              Vue.delete(state.MeasurementTypeCategory, item.MeasurementTypeCategoryID)
            } else {
              Vue.delete(state.MeasurementTypeCategory, item.MeasurementTypeCategoryID)
            }
          }
        }
      })

      localForage.setItem('Core_MeasurementTypeCategory', state.MeasurementTypeCategory)
    }
  },
  SET_METRICDETAIL (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricDetail, payload.MetricDetailID, payload)
      localForage.setItem('Core_MetricDetail', state.MetricDetail)
    }
  },
  SET_METRICDETAIL_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MetricDetail, element.MetricDetailID, element)
      }, this)
      _.each(state.MetricDetail, (item, idx) => {
        if (item.MetricDetailID >= 1073741824 || item.MetricDetailID === null) {
          let extant = _.find(state.MetricDetail, extItem => {
            return extItem.ID === item.ID && extItem.MetricDetailID !== item.MetricDetailID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricDetailID
              let newVal = {...extant, ...item}
              newVal.MetricDetailID = extId
              Vue.set(state.MetricDetail, newVal.MetricDetailID, newVal)
              Vue.delete(state.MetricDetail, item.MetricDetailID)
            } else {
              Vue.delete(state.MetricDetail, item.MetricDetailID)
            }
          }
        }
      })

      localForage.setItem('Core_MetricDetail', state.MetricDetail)
    }
  },
  SET_METRICSET (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricSet, payload.MetricSetID, payload)
      localForage.setItem('Core_MetricSet', state.MetricSet)
    }
  },
  SET_METRICSET_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MetricSet, element.MetricSetID, element)
      }, this)
      _.each(state.MetricSet, (item, idx) => {
        if (item.MetricSetID >= 1073741824 || item.MetricSetID === null) {
          let extant = _.find(state.MetricSet, extItem => {
            return extItem.ID === item.ID && extItem.MetricSetID !== item.MetricSetID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricSetID
              let newVal = {...extant, ...item}
              newVal.MetricSetID = extId
              Vue.set(state.MetricSet, newVal.MetricSetID, newVal)
              Vue.delete(state.MetricSet, item.MetricSetID)
            } else {
              Vue.delete(state.MetricSet, item.MetricSetID)
            }
          }
        }
      })

      localForage.setItem('Core_MetricSet', state.MetricSet)
    }
  },
  SET_STATTYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.StatType, payload.StatTypeID, payload)
      localForage.setItem('Core_StatType', state.StatType)
    }
  },
  SET_STATTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.StatType, element.StatTypeID, element)
      }, this)
      _.each(state.StatType, (item, idx) => {
        if (item.StatTypeID >= 1073741824 || item.StatTypeID === null) {
          let extant = _.find(state.StatType, extItem => {
            return extItem.ID === item.ID && extItem.StatTypeID !== item.StatTypeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.StatTypeID
              let newVal = {...extant, ...item}
              newVal.StatTypeID = extId
              Vue.set(state.StatType, newVal.StatTypeID, newVal)
              Vue.delete(state.StatType, item.StatTypeID)
            } else {
              Vue.delete(state.StatType, item.StatTypeID)
            }
          }
        }
      })

      localForage.setItem('Core_StatType', state.StatType)
    }
  },
  SET_TIME (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Time, payload.TimeID, payload)
      localForage.setItem('Core_Time', state.Time)
    }
  },
  SET_TIME_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Time, element.TimeID, element)
      }, this)
      _.each(state.Time, (item, idx) => {
        if (item.TimeID >= 1073741824 || item.TimeID === null) {
          let extant = _.find(state.Time, extItem => {
            return extItem.ID === item.ID && extItem.TimeID !== item.TimeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.TimeID
              let newVal = {...extant, ...item}
              newVal.TimeID = extId
              Vue.set(state.Time, newVal.TimeID, newVal)
              Vue.delete(state.Time, item.TimeID)
            } else {
              Vue.delete(state.Time, item.TimeID)
            }
          }
        }
      })

      localForage.setItem('Core_Time', state.Time)
    }
  },
  SET_UNIT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Unit, payload.UnitID, payload)
      localForage.setItem('Core_Unit', state.Unit)
    }
  },
  SET_UNIT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Unit, element.UnitID, element)
      }, this)
      _.each(state.Unit, (item, idx) => {
        if (item.UnitID >= 1073741824 || item.UnitID === null) {
          let extant = _.find(state.Unit, extItem => {
            return extItem.ID === item.ID && extItem.UnitID !== item.UnitID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.UnitID
              let newVal = {...extant, ...item}
              newVal.UnitID = extId
              Vue.set(state.Unit, newVal.UnitID, newVal)
              Vue.delete(state.Unit, item.UnitID)
            } else {
              Vue.delete(state.Unit, item.UnitID)
            }
          }
        }
      })

      localForage.setItem('Core_Unit', state.Unit)
    }
  },
  SET_UNITTYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.UnitType, payload.UnitTypeID, payload)
      localForage.setItem('Core_UnitType', state.UnitType)
    }
  },
  SET_UNITTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.UnitType, element.UnitTypeID, element)
      }, this)
      _.each(state.UnitType, (item, idx) => {
        if (item.UnitTypeID >= 1073741824 || item.UnitTypeID === null) {
          let extant = _.find(state.UnitType, extItem => {
            return extItem.ID === item.ID && extItem.UnitTypeID !== item.UnitTypeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.UnitTypeID
              let newVal = {...extant, ...item}
              newVal.UnitTypeID = extId
              Vue.set(state.UnitType, newVal.UnitTypeID, newVal)
              Vue.delete(state.UnitType, item.UnitTypeID)
            } else {
              Vue.delete(state.UnitType, item.UnitTypeID)
            }
          }
        }
      })

      localForage.setItem('Core_UnitType', state.UnitType)
    }
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
