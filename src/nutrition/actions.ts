import * as cycleActionNames from './action-names'

const {
  ADD_CYCLE
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
