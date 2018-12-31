import * as React from 'react'
import Navbar from '../navbar/container'
import Diagram from '../diagrams/component'

export default class Main extends React.Component<any, any> {
  public render() {
    return (
      <div className='outer-container'>
        <Navbar />
        <Diagram />
      </div>
    )
  }
}
