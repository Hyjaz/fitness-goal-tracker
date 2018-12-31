import * as React from 'react'
import { BrowserRouter, Route, Switch/*, Redirect*/ } from 'react-router-dom'
import CallbackPage from './callback/container'
import Login from './login/component'
import './style.scss'
import Main from './dashboard/container'


export default class App extends React.Component<any, any>{
  public render(): JSX.Element {
    console.log('inside App')
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/callback" component={CallbackPage} />
          <Route path='/main' component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}


