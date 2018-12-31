import { reducer as oidcReducer } from 'redux-oidc';
import { combineReducers } from 'redux'

export default combineReducers<any>({
  oidc: oidcReducer
})
