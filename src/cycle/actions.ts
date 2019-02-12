import * as cycleActionNames from './actionNames'
import { createAction } from '../types'

const {
  ADD_CYCLE,
  GET_CYCLES
} = cycleActionNames

export const addCycle = (userId: string, startTime: string, endTime: string)  => createAction(ADD_CYCLE, {userId, startTime, endTime})
export const getCycles = (userId: string) => createAction(GET_CYCLES, {userId})

export interface CycleAction {
  addCycle(userId: string, startTime: string, endTime: string): any
  getCycles(userId: string): any
}
