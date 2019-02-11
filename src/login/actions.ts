import * as actionNames from './actionNames'

const {
  ADD_USERIFNOTEXISTS
} = actionNames

export function addUserIfNotExists(sub: string) {
  return {
    type: ADD_USERIFNOTEXISTS,
    payload: sub
  }
}
