const initialState = {
  cycles: []
}

import * as Cycle from './action-names'

const {
  ADD_CYCLE,
  GET_CYCLES_SUCCESS
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
        cycles: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
