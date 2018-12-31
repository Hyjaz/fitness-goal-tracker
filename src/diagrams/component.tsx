import * as React from 'react'
import ProgressBar from './ProgressBar/component';
import './styles.scss'
export default class Diagram extends React.Component {
  public render() {
    return (
      <div className="inner-diagram">
        <div className='outer-progressbar-one'>
          <div className='inner-progressbar-one'>
            <ProgressBar percentage='55' />
          </div>
        </div>
        <div className='outer-progressbar-two'>
          <div className='inner-progressbar-two'>
            <ProgressBar percentage='66' />
          </div>
        </div>
        <div className='outer-progressbar-three'>
          <div className='inner-progressbar-three'>
            <ProgressBar percentage='23' />
          </div>
        </div>
      </div>
    )
  }
}
