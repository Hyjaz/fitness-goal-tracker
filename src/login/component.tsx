import * as React from 'react'
import userManager from '../userManager'
import Button from '@material-ui/core/Button';
import './styles.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const mapStateToProps = (state: any) => {
  return {
    oidc: state.oidc,
  };
}
class Login extends React.Component<any, any> {
  public login() {
    userManager.signinRedirect();
  }
  public render() {
    return (
      <div className='login-inner-container'>
        {
          this.props.oidc.user ?
            this.props.history.push('/main') :
            <div className="login">
              <div className='login-title'>
                Fitness Goal Tracker
          </div>
              <div className="login-button">
                <Button variant='contained' color='primary' onClick={this.login}>Login</Button>
              </div>
            </div>
        }
      </div>

    )
  }
}

export default withRouter(connect(mapStateToProps, null)(Login) as any)
