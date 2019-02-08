import * as _ from 'lodash'

import { Middleware, applyMiddleware, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { StoreState } from './types'
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory'
import { epics } from './epics'
import { loadUser } from 'redux-oidc'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux';
import userManager from './userManager'

const rootEpic = combineEpics(..._.values(epics))
const epicMiddleware = createEpicMiddleware()
const history = createHistory();
const middlewares: Middleware[] = []
if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
middlewares.push(epicMiddleware)

const store = createStore<StoreState, any, {}, {}>(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares, routerMiddleware(history))),
)
epicMiddleware.run(rootEpic)
loadUser(store, userManager);

export { store, history }
