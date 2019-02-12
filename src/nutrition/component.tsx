import * as React from 'react'

import CycleList from '../cycle/cycleList/container'

export default class Nutrition extends React.Component {
  public render() {
    return (
      <div className='nutrition'>
        <CycleList />
      </div>
    )
  }
}

