import * as React from 'react'
import Navbar from '../navbar/container'
import Diagram from '../diagrams/component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import userManager from '../userManager';

const mapStateToProps = (state: any) => {
  return {
    oidc: state.oidc,
  };
}
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
        </div>
      </div >
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(Dashboard) as any)
