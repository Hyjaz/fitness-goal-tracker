import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CallbackPage from './callback/container'
import Login from './login/component'
import './style.scss'
import Main from './main/container'
export default class App extends React.Component<any, any>{

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/callback" component={CallbackPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
