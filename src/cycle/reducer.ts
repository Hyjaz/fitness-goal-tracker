const initialState = {
  cycles: [],
  isAddCycle: false,
  isGetCycle: false
}

import * as Cycle from './actionNames'

const {
  ADD_CYCLE,
  GET_CYCLES_SUCCESS,
  GET_CYCLES_FAIL,
  ADD_CYCLE_SUCCESS,
  ADD_CYCLE_FAIL
} = Cycle

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload]
      }
    case GET_CYCLES_SUCCESS:
      return {
        ...state,
        cycles: action.payload,
        isGetCycle: true,
        isAddCycle: false
      }
    case GET_CYCLES_FAIL:
      return {
        ...state,
        cycles: action.payload,
        isGetCycle: false,
        isAddCycle: false
      }
    case ADD_CYCLE_SUCCESS:
      return {
        ...state,
        cycles: action.payload,
        isAddCycle: true,
        isGetCycle: false,
      }
    case ADD_CYCLE_FAIL:
      return {
        ...state,
        cycles: action.payload,
        isAddCycle: false,
        isGetCycle: false,
      }
    default:
      return {
        ...state
      }
  }
}
