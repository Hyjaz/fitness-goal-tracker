import * as cycleActions from './action-names'

const {
  ADD_CYCLE
} = cycleActions

export const addCycle = (startTime: Date, endTime: Date) => {
  return {
    type: ADD_CYCLE,
    payload: {
      startTime,
      endTime
    }
  }
}
