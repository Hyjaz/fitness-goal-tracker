import * as React from 'react';
import * as cycleActions from '../login/actions'

import { CallbackComponent } from 'redux-oidc';
import { StoreState } from '../types';
import { connect } from 'react-redux'
import userManager from '../userManager';
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = {
  ...cycleActions
}
class Callback extends React.Component<any, any> {
  onSuccess = () => {
    this.props.addUserIfNotExists(this.props.oidc.user.profile.sub)
    this.props.history.push('/dashboard');
  }

  onFailure = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.onSuccess.bind(this)}
        errorCallback={this.onFailure.bind(this)}
      >
        <div>
          redirecting....
        </div>
      </CallbackComponent>
    );
  }
}

export default connect((state: StoreState) => ({ ...state }), mapDispatchToProps)(withRouter(Callback));
