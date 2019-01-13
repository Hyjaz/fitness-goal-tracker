import * as React from 'react'

import { Drawer } from '@material-ui/core';

export default class HamburgerMenu extends React.Component<any, any> {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
        ></Drawer>
      </div>
    )
  }
}
