const initialState = {
  cycle: []
}

import * as Cycle from './action-names'

const {
  ADD_CYCLE,
} = Cycle

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_CYCLE:
      return {
        ...state,
        cycle: [...state.cycle, action.payload]
      }
    default:
      return {
        ...state
      }
  }
}
