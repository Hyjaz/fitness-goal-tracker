import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store, history } from './store'
import { OidcProvider } from 'redux-oidc'
import userManager from './userManager'
import { Router } from 'react-router-dom'

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
