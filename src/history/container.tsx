import * as CycleActions from '../cycle/actions'
import * as React from 'react'

import { Cycle } from 'fitness-goal-tracker'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Navbar from '../navbar/container'
import { StoreState } from '../types'
import { connect } from 'react-redux'
import userManager from '../userManager'
import { withStyles } from '@material-ui/core'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fbfbfb',
  },
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
  render() {
    const { classes } = this.props
    var allCycles = this.props.nutrition.cycles.map((cycle: Cycle, index: number) => {
      return (
        <List key={index}>
          <ListItem >
            <ListItemText>
              {cycle._id}
            </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemText>
              {cycle.startTime}
            </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemText>
              {cycle.endTime}
            </ListItemText>
          </ListItem>
        </List>
      )
    })
    return (
      <div>
        <div className='outer_container'>
          <Navbar title={'History'} />
          <div className={classes.root}>
            {allCycles}
          </div>
        </div>
      </div >
    )
  }
}

export default connect<StoreState, any>((state: StoreState) => ({ ...state }), mapDispatchToProps)((withStyles(styles))(CyclesHistory))
