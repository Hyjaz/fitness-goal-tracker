import * as React from 'react'
import Navbar from '../navbar/container'
import Diagram from '../diagrams/component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
  return {
    oidc: state.oidc,
  };
}
class Dashboard extends React.Component<any, any> {
  render() {
    return (
      <div>
        {
          this.props.oidc.user ?
            <div className='outer-container'>
              <Navbar />
              <Diagram />
            </div>
            :
            this.props.history.push('/')
        }
      </div >
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(Dashboard) as any)
