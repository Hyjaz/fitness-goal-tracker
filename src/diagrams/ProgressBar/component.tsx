import 'react-circular-progressbar/dist/styles.css';

import * as React from 'react'

import CircularProgressbar from 'react-circular-progressbar';

export default class ProgressBar extends React.Component<any, any> {
  public render() {
    const percentage = parseInt(this.props.percentage)

    return (
      <div>
        <CircularProgressbar
          percentage={percentage}
          text={`${percentage}%`}
        />
      </div>

    )
  }
}
