import * as React from 'react'
import * as fitness from 'fitness-goal-tracker'

import { ListItem, ListItemText } from '@material-ui/core';

import List from '@material-ui/core/List'

class CycleList extends React.Component<fitness.User, any> {
  render() : JSX.Element {
    var cycles = this.props.cycles.map((cycle: fitness.Cycle, index: number) : JSX.Element => {
      return (
        <List>
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
        {cycles}
      </div>
    )
  }
}

export default CycleList
