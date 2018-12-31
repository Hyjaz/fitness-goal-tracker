import * as React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
// import { withRouter/*, Redirect*/ } from 'react-router-dom'
import userManager from '../userManager';
import { withRouter } from 'react-router-dom'

class CallbackPage extends React.Component<any, any> {
  onSuccess = () => {
    this.props.history.push('/main');
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

export default withRouter(connect()(CallbackPage) as any);
