import * as React from 'react';
import * as cycleActions from '../login/actions'
import { LoginActions } from '../login/actions'

import { CallbackComponent } from 'redux-oidc'
import { StoreState } from '../types'
import { connect } from 'react-redux'
import userManager from '../userManager'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = {
  ...cycleActions
}
class Callback extends React.Component<StoreState & LoginActions, any> {
  onSuccess = () => {
    this.props.addUserIfNotExists(this.props.oidc.user.profile.sub)
    this.props.history.push('/dashboard');
  }

  onFailure = (error: Error) => {
    console.log(error)
    this.props.history.push('/'); 
  }

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.onSuccess}
        errorCallback={this.onFailure}
      >
        <div>
          redirecting....
        </div>
      </CallbackComponent>
    );
  }
}

export default connect<StoreState>((state: StoreState) => ({ ...state }), mapDispatchToProps)(withRouter(Callback));
