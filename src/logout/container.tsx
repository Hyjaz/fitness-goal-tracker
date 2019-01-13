import './styles.scss'

import * as React from 'react'

import userManager from '../userManager'
import { withRouter } from 'react-router';

class Logout extends React.Component<any, any> {
  logout = () => {
    userManager.removeUser().then(() => {
      this.props.history.push('/')
    })
  }
  public render() {
    return (
      <div className="logout">
        <div onClick={this.logout}>Logout</div>
      </div>
    )
  }
}

export default withRouter(Logout)
