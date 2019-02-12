import 'react-dates/lib/css/_datepicker.css';
import './styles.scss'

import * as CycleActions from './actions'
import * as React from 'react'

import { Redirect, RouterProps } from 'react-router'

import { Button } from '@material-ui/core';
import { CycleAction } from './actions';
import { DateRangePicker } from 'react-dates'
import { Moment } from 'moment'
import { StoreState } from '../types'
import { connect } from 'react-redux';

import moment = require('moment');

const mapDispatchToProps = {
  ...CycleActions
}
interface DateRangePickerState {
  open: boolean,
  startDate: Moment | null,
  endDate: Moment | null,
  focusedInput: any
}

class Cycle extends React.Component<RouterProps & StoreState & CycleAction, DateRangePickerState> {
  state: DateRangePickerState = {
    open: false,
    startDate: moment(),
    endDate: moment(),
    focusedInput: null
  };

  handleClickOpen = async () => {
    this.setState({ open: true });
    this.props.addCycle(this.props.oidc.user ? this.props.oidc.user.profile.sub : null,
      this.state.startDate ? this.state.startDate.unix().toString() : "",
      this.state.endDate? this.state.endDate.unix().toString() : "")
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props.nutrition)
    return this.props.nutrition.isAddCycle ? 
    <Redirect to="/dashboard" /> : (
      <div className='cycle'>
        <div className='cycle_date_picker'>
          <div className='cycle_date_picker_inner'>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({startDate, endDate}) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </div>
        </div>
        <div className='cycle_button'>
          <Button variant='contained' color='primary' onClick={this.handleClickOpen}>
            Add Cycle
        </Button>
        </div>
      </div>
    )
  }
}

export default connect<StoreState, CycleAction>((state: StoreState) => ({ ...state }), mapDispatchToProps)(Cycle)
