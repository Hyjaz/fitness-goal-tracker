import * as React from 'react'
import userManager from '../userManager'
import Button from '@material-ui/core/Button';
import './styles.scss'

export default class Login extends React.Component<any, any> {
  public login() {
    userManager.signinRedirect();
  }
  public render() {
    return (
      <div className='login-inner-container'>
        <div className="login">
          <Button variant='contained' color='primary' onClick={this.login}>Login</Button>
        </div>
      </div>
    )
  }
}
