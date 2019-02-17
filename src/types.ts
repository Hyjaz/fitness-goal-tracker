// import * as fitness from 'fitness-goal-tracker'

import { RouterState } from 'react-router-redux'
import { UserState } from 'redux-oidc'

export interface StoreState {
  oidc: UserState,
  router: RouterState,
  nutrition: any
  loginReducer: any
}

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P> {
  return {
    payload,
    type
  }
}
