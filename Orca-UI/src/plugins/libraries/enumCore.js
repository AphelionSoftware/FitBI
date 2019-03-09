/// TODO: Eliminate this library, use Core in VUEX instead
import {Enum} from 'enumify'
class Active extends Enum {}
Active.initEnum({
  DEL: {Code: 'DEL', Name: 'Deleted', intID: -1},
  INA: {Code: 'INA', Name: 'Inactive', intID: 0},
  ACT: {Code: 'ACT', Name: 'Active', intID: 1}
})
class BodyPart extends Enum {}
BodyPart.initEnum({
  QUAD: {Code: 'QUAD', Name: 'Quadriceps', intID: 1},
  NECK: {Code: 'NECK', Name: 'Neck', intID: 2},
  BELLYBUTTON_CIRC: {Code: 'BELLYBUTTON_CIRC', Name: 'Bellybutton - circumference around the body', intID: 3},
  BICEP: {Code: 'BICEP', Name: 'Bicep', intID: 4},
  FOREARM: {Code: 'FOREARM', Name: 'Forearm', intID: 5},
  CALF: {Code: 'CALF', Name: 'Calf', intID: 6},
  WRIST: {Code: 'WRIST', Name: 'Wrist', intID: 7},
  ANKLE: {Code: 'ANKLE', Name: 'Ankle', intID: 8},
  HIP: {Code: 'HIP', Name: 'Hip - circumference around the body', intID: 9},
  WAIST: {Code: 'WAIST', Name: 'Waist - circumference around the body', intID: 10},
  CHEST: {Code: 'CHEST', Name: 'Chest - circumference around the body', intID: 11}
})
class BodyPartType extends Enum {}
BodyPartType.initEnum({
  MUSCLE: {Code: 'MUSCLE', Name: 'Muscle', intID: 1},
  TENDON: {Code: 'TENDON', Name: 'Tendon', intID: 2},
  LIGAMENT: {Code: 'LIGAMENT', Name: 'Ligament', intID: 3},
  BONE: {Code: 'BONE', Name: 'Skeletal - bone', intID: 4},
  STRUCTURE: {Code: 'STRUCTURE', Name: 'Structural - multipart', intID: 5}
})
class MeasurementControl extends Enum {}
MeasurementControl.initEnum({
  NUMSLIDER: {Code: 'NUMSLIDER', Name: 'Numeric Slider', intID: 1}
})
class MeasurementType extends Enum {}
MeasurementType.initEnum({
  DEXA: {Code: 'DEXA', Name: 'DEXA', intID: 1},
  BIA: {Code: 'BIA', Name: 'Bio Electrical Impedance', intID: 2},
  CAL7: {Code: 'CAL7', Name: '7 fold Caliper', intID: 3},
  CAL4: {Code: 'CAL4', Name: '4 fold Caliper', intID: 4},
  CAL3: {Code: 'CAL3', Name: '3 fold Caliper', intID: 5},
  NAVY: {Code: 'NAVY', Name: 'Navy - tape measure', intID: 6},
  TAPE: {Code: 'TAPE', Name: 'Tape measure - full', intID: 7},
  NA: {Code: 'NA', Name: 'Not applicable', intID: 9},
  LEFT: {Code: 'LEFT', Name: 'Left side', intID: 10},
  RIGHT: {Code: 'RIGHT', Name: 'Right side', intID: 11},
  AVG: {Code: 'AVG', Name: 'Average ', intID: 12},
  CIRC: {Code: 'CIRC', Name: 'Circumference', intID: 13},
  SKINFOLD: {Code: 'SKINFOLD', Name: 'Skinfold Thickness', intID: 14}
})
class MeasurementTypeCategory extends Enum {}
MeasurementTypeCategory.initEnum({
  BF: {Code: 'BF', Name: 'Bodyfat percentage', intID: 1},
  SIDE: {Code: 'SIDE', Name: 'Body side', intID: 2},
  CIRC: {Code: 'CIRC', Name: 'Circumference', intID: 3},
  SKINFOLD: {Code: 'SKINFOLD', Name: 'Skinfold Thickness', intID: 4},
  WEIGHT: {Code: 'WEIGHT', Name: 'Weight', intID: 5},
  COMP: {Code: 'COMP', Name: 'Body Composition', intID: 6}
})
class StatType extends Enum {}
StatType.initEnum({
  BodyFatPercentage: {Code: 'BodyFatPercentage', Name: 'BodyFatPercentage', intID: 1},
  Quadriceps: {Code: 'Quadriceps', Name: 'Quadriceps', intID: 2},
  Neck: {Code: 'Neck', Name: 'Neck', intID: 3},
  BBCIRC: {Code: 'BBCIRC', Name: 'Bellybutton - circumference around the body', intID: 4},
  Weight: {Code: 'Weight', Name: 'Weight', intID: 5},
  MusclePercentage: {Code: 'MusclePercentage', Name: 'MusclePercentage', intID: 6},
  WaterPercentage: {Code: 'WaterPercentage', Name: 'WaterPercentage', intID: 7},
  BonePercentage: {Code: 'BonePercentage', Name: 'BonePercentage', intID: 8}
})
class Unit extends Enum {}
Unit.initEnum({
  LB: {Code: 'LB', Name: 'Pound', intID: 1},
  IN: {Code: 'IN', Name: 'Inch', intID: 2},
  KG: {Code: 'KG', Name: 'Kilogram', intID: 3},
  CM: {Code: 'CM', Name: 'Centimeter', intID: 4}
})
class UnitType extends Enum {}
UnitType.initEnum({
  IMPERIAL: {Code: 'IMPERIAL', Name: 'Imperial / American', intID: 1},
  METRIC: {Code: 'METRIC', Name: 'Metric', intID: 2}
})

export default {
  Active,
  BodyPart,
  BodyPartType,
  MeasurementControl,
  MeasurementType,
  MeasurementTypeCategory,
  StatType,
  Unit,
  UnitType
}
