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
      console.log('got in cycle')
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
