// import * as _ from 'lodash'
import logger from 'redux-logger'
import { applyMiddleware, createStore, Middleware } from 'redux'
import { /*combineEpics,*/ createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import { loadUser } from 'redux-oidc'
import userManager from './userManager'
// import epics from './epics'
import rootReducer from './reducers'
import { StoreState } from './types'
import { routerMiddleware } from 'react-router-redux';

const epicMiddleware = createEpicMiddleware()
// const rootEpic = combineEpics(..._.values(epics))
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
// epicMiddleware.run(rootEpic)
