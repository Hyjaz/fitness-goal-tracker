import 'rxjs'

import * as CycleEpics from './nutrition/epics'
import * as _ from 'lodash'

import axios from 'axios'

export function getAxios() {
  const __API__ = 'http://localhost:5000'
  return axios.create({ baseURL: __API__ })
}
const initialEpicFunctions: any = []

const ListEpics = [
  CycleEpics
]

export const epics = _.reduce(ListEpics, (result: any, epic: any) => _.concat(result, _.values(epic)), initialEpicFunctions)
