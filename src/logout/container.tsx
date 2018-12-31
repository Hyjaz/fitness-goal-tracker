import * as React from 'react'
import userManager from '../userManager'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import './styles.scss'

class Logout extends React.Component<any, any> {
  logout = () => {
    userManager.removeUser()
    userManager.getUser().then(user => {
      if (!user) {
        this.props.history.push('/');
      } else {
        userManager.removeUser()
      }
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

export default withRouter(connect()(Logout) as any)
