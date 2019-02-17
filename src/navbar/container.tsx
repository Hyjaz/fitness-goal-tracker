import './styles.scss'

import * as React from 'react'

import Button from '../muioverrides/Button'
import { Redirect } from 'react-router-dom'
import Settings from '../settings/component'
import { StoreState } from '../types'
import { connect } from 'react-redux'

interface OwnProps {
  title: string
}

interface OwnState {
  redirect: boolean
}
class Navbar extends React.Component<OwnProps & StoreState, OwnState> {
  state: OwnState = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  handleClickProfile = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' push={true} />
    }
  }
  render(): JSX.Element {
    return (
      <div className='navbar'>
        {this.handleClickProfile()}
        <Button onClick={this.setRedirect}>
          <div className='navbar_username'>
            {this.props.oidc.user ? this.props.oidc.user.profile.name : 'unknown'}
          </div>
        </Button>
        <div className='navbar_items'>
          <div className='navbar_items_overview'>
            {this.props.title}
          </div>
        </div>
        <div className="outer-logout">
          <Settings picture={this.props.oidc.user ? this.props.oidc.user.profile.picture : undefined} />
        </div>
      </div>
    )
  }
}

export default connect<StoreState>((state: StoreState) => ({ ...state }))(Navbar)
