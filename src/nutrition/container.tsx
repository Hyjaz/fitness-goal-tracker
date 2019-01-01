import * as React from 'react'

import CycleDialog from './cycle/container';

export default class Nutrition extends React.Component {
  public render() {
    return (
      <div className='nutrition'>
        <CycleDialog />
      </div>
    )
  }
}
