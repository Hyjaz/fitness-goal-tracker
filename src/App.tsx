import './style.scss'
import 'react-dates/initialize';

import * as React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Callback from './callback/container'
import Cycle from './cycle/container'
import Dashboard from './dashboard/container'
import Login from './login/container'

export default class App extends React.Component<any, any>{
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/cycle' component={Cycle} />
          <Route path="/callback" component={Callback} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}
