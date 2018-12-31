import * as React from 'react';

import { CallbackComponent } from 'redux-oidc';
import userManager from '../userManager';
import { withRouter } from 'react-router-dom'

class Callback extends React.Component<any, any> {
  onSuccess = () => {
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

export default withRouter(Callback);
