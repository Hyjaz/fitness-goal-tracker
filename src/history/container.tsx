import './styles.scss'

import * as CycleActions from '../cycle/actions'
import * as React from 'react'
import *  as moment from 'moment'

import { Cycle } from 'fitness-goal-tracker'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Navbar from '../navbar/container'
import { StoreState } from '../types'
import { connect } from 'react-redux'
import userManager from '../userManager'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    display: 'grid',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fbfbfb'
  }
});

const mapDispatchToProps = {
  ...CycleActions
}

class CyclesHistory extends React.Component<any, any>{
  componentWillMount() {
    userManager.getUser().then(user => {
      if (!user) return
      this.props.getCycles(user.profile.sub)
    })
  }
  handleCycleId = (cycleId: string) => {
    console.log(cycleId)
  }
  render() {
    const { classes } = this.props
    var allCycles = this.props.nutrition.cycles
      .sort((a: Cycle, b: Cycle) => moment(a.startTime).toDate().getTime() - moment(b.startTime).toDate().getTime())
      .map((cycle: Cycle, index: number) => {
        return (
          <List key={index}>
            <ListItem button onClick={this.handleCycleId.bind(null, cycle._id)}>
              <ListItemText>
                {cycle._id} - {moment(cycle.startTime).toDate().toLocaleString()} | {moment(cycle.endTime).toDate().toLocaleString()}
              </ListItemText>
            </ListItem>
          </List>
        )
      })
    return (
      <div>
        <div className='outer_container'>
          <Navbar title={'History'} />
          <div className='outer-history'>
            <div className='inner-history'>
              <div className='inner-inner-history'>
                <div className={classes.root}>
                  {allCycles}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default connect<StoreState, any>((state: StoreState) => ({ ...state }), mapDispatchToProps)((withStyles(styles))(CyclesHistory))
