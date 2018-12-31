import { Middleware, applyMiddleware, createStore } from 'redux'

import { StoreState } from './types'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import { loadUser } from 'redux-oidc'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux';
import userManager from './userManager'

const epicMiddleware = createEpicMiddleware()
const history = createHistory();
const middlewares: Middleware[] = []
if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
middlewares.push(epicMiddleware)

const store = createStore<StoreState, any, {}, {}>(
  rootReducer,
  applyMiddleware(...middlewares, routerMiddleware(history)),
)
loadUser(store, userManager);

export { store, history }
