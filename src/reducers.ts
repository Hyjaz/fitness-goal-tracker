import { StoreState } from './types'
import { combineReducers } from 'redux'
import loginReducer from './login/reducers'
import nutritionReducer from './cycle/reducer'
import { reducer as oidcReducer } from 'redux-oidc';
import { routerReducer } from 'react-router-redux'

export default combineReducers<StoreState>({
  oidc: oidcReducer,
  router: routerReducer,
  nutrition: nutritionReducer,
  loginReducer
})
