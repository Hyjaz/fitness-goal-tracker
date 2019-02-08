import './styles.scss'

import * as React from 'react'

import { Avatar, Menu, MenuItem, withStyles } from '@material-ui/core'

import Logout from '../logout/container'

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

  handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
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
          <MenuItem onClick={this.handleClose}>Add cycle</MenuItem>
          <MenuItem onClick={this.handleClose}><Logout /></MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(Settings);