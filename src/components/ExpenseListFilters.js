import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calenderFocused: null
        }
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    }
    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value.trim()));
                }} />
                <select onChange={(e) => {
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                }} value={this.props.filters.sortBy}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
            );

        
    }
}


 
const mapStateToProps = (state) => {
    return {
        filters: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);
