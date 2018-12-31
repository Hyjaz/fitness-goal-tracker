import './style.scss'

import * as React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Callback from './callback/container'
import Dashboard from './dashboard/container'
import Login from './login/component'

export default class App extends React.Component<any, any>{
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/callback" component={Callback} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}
