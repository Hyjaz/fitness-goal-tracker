import 'react-dates/lib/css/_datepicker.css';
import './styles.scss'

import * as CycleActions from './actions'
import * as React from 'react'

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
interface DataRangePickerState {
  open: boolean,
  startDate: Moment,
  endDate: Moment,
  focusedInput: any
}
class Cycle extends React.Component<any & CycleAction> {
  state: DataRangePickerState = {
    open: false,
    startDate: moment(),
    endDate: moment(),
    focusedInput: null
  };
  handleClickOpen = async () => {
    this.setState({ open: true });
    this.props.addCycle(this.props.oidc.user ? this.props.oidc.user.profile.sub : null,
      this.state.startDate.unix().toString(),
      this.state.endDate.unix().toString())
    this.props.history.push('/dashboard')
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className='cycle'>
        <div className='cycle_date_picker'>
          <div className='cycle_date_picker_inner'>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
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
    );
  }
}

export default connect<StoreState, CycleAction>((state: StoreState) => ({ ...state }), mapDispatchToProps)(Cycle)
