import * as cycleNames from './actionNames'

const {
  ADD_USERIFNOTEXISTS,
  ADD_USERIFNOTEXISTS_FAIL,
  ADD_USERIFNOTEXISTS_SUCCESS
} = cycleNames

export default function (state = {}, action: any) {
  switch (action.type) {
    case ADD_USERIFNOTEXISTS:
      return {
        ...state,
      }
    case ADD_USERIFNOTEXISTS_FAIL:
      return {
        ...state,
      }
    case ADD_USERIFNOTEXISTS_SUCCESS:
      return {
        ...state,
      }
    default:
      return {
        ...state
      }
  }
}
