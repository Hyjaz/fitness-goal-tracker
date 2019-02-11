import * as cycleActionNames from './actionNames'
const {
  ADD_CYCLE,
  GET_CYCLES
} = cycleActionNames

export const addCycle = (userId: string, startTime: string, endTime: string) => {
  return {
    type: ADD_CYCLE,
    payload: {
      userId,
      startTime,
      endTime
    }
  }
}

export const getCycles = (userId: string) => {
  return {
    type: GET_CYCLES,
    payload: {
      userId
    }
  }
}

export interface CycleAction {
  addCycle(userId: string, startTime: string, endTime: string): any
  getCycles(userId: string): any
}
