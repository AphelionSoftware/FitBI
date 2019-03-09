import {Enum} from 'enumify'
class UnitType extends Enum {}
UnitType.initEnum({
  IMPERIAL: {Code: 'IMPERIAL', Name: 'Imperial / American', intID: 1},
  METRIC: {Code: 'METRIC', Name: 'Metric', intID: 2}
})

export {
  UnitType
}
