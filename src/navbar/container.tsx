import './styles.scss'

import * as React from 'react'

import { StoreState } from '../types'
import { connect } from 'react-redux'
import Settings from '../settings/component';

const mapStateToProps = (state: StoreState) => {
  return {
    oidc: state.oidc
  }
}
class Navbar extends React.Component<any, any> {

  public render(): JSX.Element {
    console.log(this.props.oidc)
    return (
      <div className='navbar'>
        <div className='navbar_username'>{this.props.oidc.user ? this.props.oidc.user.profile.name : 'unknown'}</div>
        <div className='navbar_items'>
          <div className='navbar_items_overview'>
            Overview
          </div>
          {/* <div className='navbar_items_add_cycle'>
            Add Cycle
          </div>
          <div className='somethingelse' >
            Placeholder
          </div> */}
        </div>
        <div className="outer-logout">
          <Settings />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)
