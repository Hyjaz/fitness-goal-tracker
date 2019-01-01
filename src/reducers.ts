import { StoreState } from './types'
import { combineReducers } from 'redux'
import nutritionReducer from './nutrition/reducer'
import { reducer as oidcReducer } from 'redux-oidc';
import { routerReducer } from 'react-router-redux'

export default combineReducers<StoreState>({
  oidc: oidcReducer,
  routing: routerReducer,
  nutrition: nutritionReducer
})
