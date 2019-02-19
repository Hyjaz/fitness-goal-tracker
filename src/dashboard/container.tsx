import * as React from 'react'
import * as cycleActions from '../cycle/actions'

// import Diagram from '../diagrams/component'
import Navbar from '../navbar/container'
import Nutrition from '../nutrition/container'
import { StoreState } from '../types';
import { User } from 'oidc-client';
import { connect } from 'react-redux'
import userManager from '../userManager'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = {
  ...cycleActions
}

class Dashboard extends React.Component<any, any> {
  componentWillMount() {
    userManager.getUser().then((user: User) => {
      if (!user) {
        console.log("in user")
        return this.props.history.push('/')
      }
      console.log("in not user", user.profile.sub)
      return this.props.getCycles(user.profile.sub)
    })
  }

  render() {
    return (
      <div>
        <div className='outer_container'>
          <Navbar title={'Dashboard'} />
          {/* <Diagram /> */}
          <Nutrition />
        </div>
      </div >
    )
  }
}

export default connect((state: StoreState) => ({ ...state }), mapDispatchToProps)(withRouter(Dashboard))
