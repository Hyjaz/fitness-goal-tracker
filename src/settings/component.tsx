import './styles.scss'

import * as React from 'react'

import { Avatar, Menu, MenuItem, withStyles } from '@material-ui/core'

import userManager from '../userManager'
import { withRouter } from 'react-router'

const styles = {
  bigAvatar: {
    margin: 10,
    width: 50,
    height: 50,
  },
};
class Settings extends React.Component<any, any> {
  state = {
    anchorEl: null,
  };

  handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  }
  handleLogout = () => {
    this.setState({ anchorEl: null });
    userManager.removeUser().then(() => {
      this.props.history.push('/')
    })
  };
  handleAddCycle = () => {
    this.props.history.push('/cycle')
  }
  handleDashboard = () => {
    this.props.history.push('/dashboard')
  }
  handleCyclesHistory = () => {
    this.props.history.push('/history')
  }
  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <div className='settings'>
        <Avatar className={classes.bigAvatar} onClick={this.handleClick} src={this.props.picture} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              padding: 0,
              left: '50%',
              transform: 'translate(-15%, 43%)'
            },
          }}
        >
          <MenuItem onClick={this.handleAddCycle}>Add cycle</MenuItem>
          <MenuItem onClick={this.handleDashboard}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleCyclesHistory}>History</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(Settings));
