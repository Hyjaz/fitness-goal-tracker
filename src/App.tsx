import * as React from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import CallbackPage from './callback/container'
import Login from './login/component'
import './style.scss'
import Main from './main/container'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
  return {
    oidc: state.oidc,
  };
}
class App extends React.Component<any, any>{

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/callback" component={CallbackPage} />
          <PrivateRoute authed={this.props.oidc.user ? true : false} path='/main' component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const PrivateRoute = ({ component: Component, authed, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

export default withRouter(connect(mapStateToProps, null)(App) as any)
