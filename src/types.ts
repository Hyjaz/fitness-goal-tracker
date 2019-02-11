import { RouterState } from 'react-router-redux'
import { UserState } from 'redux-oidc'

export interface StoreState {
  oidc: UserState,
  routing: RouterState,
  nutrition: any
  uuid: any
}
