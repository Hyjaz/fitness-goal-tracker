import * as React from 'react'

import Diagram from '../diagrams/component'
import Navbar from '../navbar/container'
import Nutrition from '../nutrition/container';
import userManager from '../userManager';
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component<any, any> {
  componentWillMount() {
    userManager.getUser().then(user => {
      if (!user) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div>
        <div className='outer-container'>
          <Navbar />
          <Diagram />
          <Nutrition />
        </div>
      </div >
    )
  }
}

export default withRouter(Dashboard)
