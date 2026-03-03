import { useCoreStore } from 'stores/coreStore'

export default function coreSetup (coreValues) {
  const store = useCoreStore()
  store.setBodyPartList(coreValues.BodyPart)
  store.setBodyPartTypeList(coreValues.BodyPartType)
  store.setMeasurementTypeList(coreValues.MeasurementType)
  store.setMeasurementTypeCategoryList(coreValues.MeasurementTypeCategory)
  store.setUnitList(coreValues.Unit)
  store.setUnitTypeList(coreValues.UnitType)
}
