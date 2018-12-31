import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { history, store } from './store'

import App from './App'
import { OidcProvider } from 'redux-oidc'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import userManager from './userManager'

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager} >
      <Router history={history} >
        <App />
      </Router>
    </OidcProvider>
  </Provider>,
  document.getElementById('root'),
)
