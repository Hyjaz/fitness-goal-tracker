import * as React from 'react'

import { Avatar, Menu, MenuItem } from '@material-ui/core';

import Logout from '../Logout/container'

export default class Settings extends React.Component<any, any> {

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

    const { anchorEl } = this.state
    return (
      <div>
        <Avatar onClick={this.handleClick}> HL</Avatar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Add cycle</MenuItem>
          <MenuItem onClick={this.handleClose}><Logout /></MenuItem>
        </Menu>
      </div>
    )
  }
}
