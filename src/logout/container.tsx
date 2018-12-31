import './styles.scss'

import * as React from 'react'

import Button from '@material-ui/core/Button';
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
        <Button size='small' variant='contained' color='primary' onClick={this.logout}>Logout</Button>
      </div>
    )
  }
}

export default withRouter(Logout)
