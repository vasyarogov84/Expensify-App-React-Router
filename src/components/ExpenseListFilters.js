import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate} from '../actions/filters';


const ExpenseListFilter = (props) => (
    <div>
        <input type="text" defaultValue={props.filters.text} onChange={(e) => {
           props.dispatch(setTextFilter(e.target.value.trim()));
        }} />
        <select onChange={(e) => {
             e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
        }} value={props.filters.sortBy}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);

 
const mapStateToProps = (state) => {
    return {
        filters: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);
