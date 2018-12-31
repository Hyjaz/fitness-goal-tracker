import * as React from 'react'
import Navbar from '../navbar/container'

export default class Main extends React.Component<any, any> {
  public render() {
    return (
      <div className='outer-container'>
        <Navbar />
      </div>
    )
  }
}
