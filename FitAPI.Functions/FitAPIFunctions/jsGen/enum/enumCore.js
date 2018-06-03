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
  BELLYBUTTON_CIRC: {Code: 'BELLYBUTTON_CIRC', Name: 'Bellybutton - circumference around the body', intID: 3}
})
class BodyPartType extends Enum {}
BodyPartType.initEnum({
  MUSCLE: {Code: 'MUSCLE', Name: 'Muscle', intID: 1},
  TENDON: {Code: 'TENDON', Name: 'Tendon', intID: 2},
  LIGAMENT: {Code: 'LIGAMENT', Name: 'Ligament', intID: 3},
  BONE: {Code: 'BONE', Name: 'Skeletal - bone', intID: 4},
  STRUCTURE: {Code: 'STRUCTURE', Name: 'Structural - multipart', intID: 1002}
})
class MeasurementType extends Enum {}
MeasurementType.initEnum({
  DEXA: {Code: 'DEXA', Name: 'DEXA', intID: 19},
  BIA: {Code: 'BIA', Name: 'Bio Electrical Impedance', intID: 20},
  CAL7: {Code: 'CAL7', Name: '7 fold Caliper', intID: 21},
  CAL4: {Code: 'CAL4', Name: '4 fold Caliper', intID: 22},
  CAL3: {Code: 'CAL3', Name: '3 fold Caliper', intID: 23},
  NAVY: {Code: 'NAVY', Name: 'Navy - tape measure', intID: 24},
  TAPE: {Code: 'TAPE', Name: 'Tape measure - full', intID: 25},
  NA: {Code: 'NA', Name: 'Not applicable', intID: 26},
  LEFT: {Code: 'LEFT', Name: 'Left side', intID: 27},
  RIGHT: {Code: 'RIGHT', Name: 'Right side', intID: 28},
  AVG: {Code: 'AVG', Name: 'Average ', intID: 29},
  CIRC: {Code: 'CIRC', Name: 'Circumference', intID: 30},
  SKINFOLD: {Code: 'SKINFOLD', Name: 'Skinfold Thickness', intID: 31}
})
class MeasurementTypeCategory extends Enum {}
MeasurementTypeCategory.initEnum({
  BF: {Code: 'BF', Name: 'Bodyfat percentage', intID: 1},
  SIDE: {Code: 'SIDE', Name: 'Body side', intID: 2},
  CIRC: {Code: 'CIRC', Name: 'Circumference', intID: 3},
  SKINFOLD: {Code: 'SKINFOLD', Name: 'Skinfold Thickness', intID: 4},
  Weight: {Code: 'Weight', Name: 'Weight', intID: 5},
  COMP: {Code: 'COMP', Name: 'Body Composition', intID: 6}
})
class StatType extends Enum {}
StatType.initEnum({
  BodyFatPercentage: {Code: 'BodyFatPercentage', Name: 'BodyFatPercentage', intID: 35},
  Quadriceps: {Code: 'Quadriceps', Name: 'Quadriceps', intID: 36},
  Neck: {Code: 'Neck', Name: 'Neck', intID: 37},
  Bellybutton - circumference around the body: {Code: 'Bellybutton - circumference around the body', Name: 'Bellybutton - circumference around the body', intID: 38},
  Weight: {Code: 'Weight', Name: 'Weight', intID: 39},
  MusclePercentage: {Code: 'MusclePercentage', Name: 'MusclePercentage', intID: 40},
  WaterPercentage: {Code: 'WaterPercentage', Name: 'WaterPercentage', intID: 41},
  BonePercentage: {Code: 'BonePercentage', Name: 'BonePercentage', intID: 42}
})
class Unit extends Enum {}
Unit.initEnum({
  LB: {Code: 'LB', Name: 'Pound', intID: 5},
  IN: {Code: 'IN', Name: 'Inch', intID: 6},
  KG: {Code: 'KG', Name: 'Kilogram', intID: 7},
  CM: {Code: 'CM', Name: 'Centimeter', intID: 8}
})
class UnitType extends Enum {}
UnitType.initEnum({
  IMPERIAL: {Code: 'IMPERIAL', Name: 'Imperial / American', intID: 1},
  METRIC: {Code: 'METRIC', Name: 'Metric', intID: 2}
})

export {
  Active,
  BodyPart,
  BodyPartType,
  MeasurementType,
  MeasurementTypeCategory,
  StatType,
  Unit,
  UnitType
}
