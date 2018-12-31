import { StoreState } from './types'
import { combineReducers } from 'redux'
import { reducer as oidcReducer } from 'redux-oidc';

export default combineReducers<StoreState>({
  oidc: oidcReducer
})
