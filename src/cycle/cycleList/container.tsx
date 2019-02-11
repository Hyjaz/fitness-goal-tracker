import * as React from 'react'
import * as cycleActions from '../actions'

import { StoreState } from '../../types';
import { connect } from 'react-redux'
import userManager from '../../userManager';

const mapDispatchToProps = {
  ...cycleActions
}
class CycleList extends React.Component<any, any> {
  componentDidMount() {
    // when user is loaded then fetch the cycles
    userManager.getUser().then(user => {
      if (user) {
        this.props.getCycles(this.props.oidc.user ? this.props.oidc.user.profile.sub : null)
      }
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default connect((state: StoreState) => ({ ...state }), mapDispatchToProps)(CycleList)
