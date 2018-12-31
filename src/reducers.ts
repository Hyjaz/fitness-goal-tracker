import { reducer as oidcReducer } from 'redux-oidc';
import { combineReducers } from 'redux'
import { StoreState } from './types'

export default combineReducers<StoreState>({
  oidc: oidcReducer
})
