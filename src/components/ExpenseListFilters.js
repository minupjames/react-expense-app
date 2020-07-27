import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
render(){
  return (
    <div>
    <input type="text" value={this.props.filters.text} onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
      }} />
    <select  onChange={(e) => {
        if (this.props.filters.sortBy === 'date'){
            this.props.dispatch(sortByDate(e.target.value));
        }else if (this.props.filters.sortBy ==='amount'){
            this.props.dispatch(sortByDate(e.target.value));
        }
        this.props.dispatch(sortByAmount(e.target.value));
      }}>


      <option value="date" >Date</option>
      <option value="amount">Amount</option>
    </select>
    <DateRangePicker
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calendarFocused}
      onFocusChange={this.onFocusChange}
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={() => false}
      startDateId="start"
      endDateId="end"
    />

  </div>
  )
}
};


const mapStateToProps = (state) => {

  return {
    filters :state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
