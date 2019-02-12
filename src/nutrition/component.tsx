import * as React from 'react'

import CycleList from '../cycle/cycleList/container'
import { StoreState } from '../types';
import { connect } from 'react-redux';

class Nutrition extends React.Component<StoreState, any> {
  public render() {
    return (
      <div className='nutrition'>
        <CycleList uuid={this.props.oidc.user ? this.props.oidc.user.profile.sub : null} cycles={this.props.nutrition.cycles}/>
      </div>
    )
  }
}

export default connect((state: StoreState) => ({...state}), null)(Nutrition)