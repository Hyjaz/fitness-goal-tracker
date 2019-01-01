import 'react-dates/lib/css/_datepicker.css';
import './styles.scss'

import * as Cycle from '../actions'
import * as React from 'react'

import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux';

const mapDispatchToProps = {
  ...Cycle
}

class CycleDialog extends React.Component<any, any> {
  state = {
    open: false,
    startDate: null,
    endDate: null,
    focusedInput: null
  };
  addCycle = (startTime: string, endTime: string) => {
    this.props.addCycle(startTime, endTime)
    this.setState({ open: false });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className='cycle_dialog'>
        <div className='date_picker_overwrite'>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
        <div className='mui_button_overwrite'>
          <Button variant='contained' color='primary' onClick={this.handleClickOpen}>
            Add Cycle
        </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CycleDialog)
