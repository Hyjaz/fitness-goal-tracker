import * as cycleActionNames from './action-names'

const {
  ADD_CYCLE,
  GET_CYCLES
} = cycleActionNames

export const addCycle = (startTime: Date, endTime: Date) => {
  return {
    type: ADD_CYCLE,
    payload: {
      startTime,
      endTime
    }
  }
}

export const getCycle = (userId: string) => {
  return {
    type: GET_CYCLES,
    payload: {
      userId
    }
  }
}
