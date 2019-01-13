import './styles.scss'

import * as React from 'react'

import ProgressBar from './ProgressBar/component';

export default class Diagram extends React.Component {
  public render() {
    return (
      <div className="inner_diagram">
        <div className='outer_progressbar_one'>
          <div className='inner_progressbar_one'>
            <ProgressBar percentage='55' />
          </div>
        </div>
        <div className='outer_progressbar_two'>
          <div className='inner_progressbar_two'>
            <ProgressBar percentage='66' />
          </div>
        </div>
        <div className='outer_progressbar_three'>
          <div className='inner_progressbar_three'>
            <ProgressBar percentage='23' />
          </div>
        </div>
      </div>
    )
  }
}
