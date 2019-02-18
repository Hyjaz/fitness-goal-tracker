import 'react-dates/lib/css/_datepicker.css'
import './styles.scss'

import * as CycleActions from './actions'
import * as React from 'react'

import Button from '../muioverrides/Button'
import { CycleAction } from './actions'
import { DateRangePicker } from 'react-dates'
import { Moment } from 'moment'
import Navbar from '../navbar/container'
import { Redirect } from 'react-router'
import { StoreState } from '../types'
import { connect } from 'react-redux'
import green from '@material-ui/core/colors/green';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import TextField from '@material-ui/core/TextField';

const mapDispatchToProps = {
  ...CycleActions
}
interface DateRangePickerState {
  open: boolean,
  startDate: Moment | null,
  endDate: Moment | null,
  focusedInput: any,
  cycleName: string
}
const styles = (theme: Theme) => ({
  margin: {
    marginTop: '1rem',
    width: '100%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: green[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: green[500],
    },
  },
})
 
class Cycle extends React.Component<WithStyles &  StoreState & CycleAction, DateRangePickerState> {
  state: DateRangePickerState = {
    open: false,
    startDate: null,
    endDate: null,
    focusedInput: null,
    cycleName: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.addCycle(this.props.oidc.user ? this.props.oidc.user.profile.sub : null,
      this.state.cycleName,
      this.state.startDate ? this.state.startDate.unix().toString() : "",
      this.state.endDate ? this.state.endDate.unix().toString() : "")
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({cycleName: event.target.value})
  }
  render(): JSX.Element {
    const {classes } = this.props
    return this.props.nutrition.isAddCycle ?
      <Redirect to="/dashboard" /> : (
        <div>
          <div className='outer_container'>
            <Navbar title={'Add Cycle'} />
            <div className='input'>
              <div className='inner-input' >
                <div className='inner-inner-input' >
                  <TextField
                    className={classes.margin}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    label="Give your cycle a title"
                    variant="outlined"
                    id="custom-css-outlined-input" 
                    onChange={this.handleOnChange}/>
                </div>
              </div>
            </div>
            <div className='cycle' >
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
          </div>
        </div>
      )
  }
}

export default connect<StoreState, CycleAction>((state: StoreState) => ({ ...state }), mapDispatchToProps)(withStyles(styles)(Cycle))
