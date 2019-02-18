import * as React from 'react';
import * as cycleActions from '../login/actions'

import { CallbackComponent } from 'redux-oidc'
import { LoginActions } from '../login/actions'
import { Redirect } from 'react-router';
import { StoreState } from '../types'
import { connect } from 'react-redux'
import userManager from '../userManager'

const mapDispatchToProps = {
  ...cycleActions
}
export interface OwnState {
  isSuccess: boolean,
  wasCalled: boolean
}
class Callback extends React.Component<StoreState & LoginActions, OwnState> {
  state: OwnState = {
    isSuccess: false,
    wasCalled: false
  }
  onSuccess = () => {
    this.props.addUserIfNotExists(this.props.oidc.user ? this.props.oidc.user.profile.sub : null)
    this.setState({ isSuccess: true, wasCalled: true })
  }

  onFailure = (error: Error) => {
    console.log(error)
    this.setState({ isSuccess: false, wasCalled: true })
  }

  render() {

    return this.state.isSuccess ? <Redirect to='/dashboard' /> : this.state.wasCalled ? <Redirect to='/' /> : (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.onSuccess}
        errorCallback={this.onFailure}
      >
        <div>
          Redirecting...

        </div>
      </CallbackComponent>
    );
  }
}

export default connect<StoreState>((state: StoreState) => ({ ...state }), mapDispatchToProps)(Callback);
