import 'rxjs'

import * as CycleEpics from './cycle/epics'
import * as _ from 'lodash'
import * as loginEpics from './login/epics'

const initialEpicFunctions: any = []

const ListEpics = [
  CycleEpics,
  loginEpics
]

export const epics = _.reduce(ListEpics, (result: any, epic: any) => _.concat(result, _.values(epic)), initialEpicFunctions)
