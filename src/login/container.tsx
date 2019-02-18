import './styles.scss'

import * as React from 'react'

import Button from '@material-ui/core/Button'
import userManager from '../userManager'
import { withRouter } from 'react-router-dom'

class Login extends React.Component<any, any> {
  componentWillMount() {
    userManager.getUser().then(user => {
      if (user) {
        this.props.history.push('/dashboard')
      }
    })
  }
  public login() {
    userManager.signinRedirect();
  }
  public render() {
    return (
      <div className='login-inner-container'>
        <div className="login">
          <div className='login-title'>
            Fitness Goal Tracker
          </div>
          <div className="login-button">
            <Button variant='contained' color='primary' onClick={this.login}>Login</Button>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Login)
