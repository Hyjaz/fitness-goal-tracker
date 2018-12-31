import * as React from 'react'
import Navbar from '../navbar/container'
import Diagram from '../diagrams/component'
export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className='outer-container'>
          <Navbar />
          <Diagram />
        </div>)
      </div >
    )
  }
}
