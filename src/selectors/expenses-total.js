import React from 'react';
import selectExpenses from './expenses';
import { connect } from 'react-redux';

export const ExpenseTotal = (props) => {
   
    return (
        <p>You viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} for are total of {Boolean(props.expenses.length) ?
            (props.expenses.map((expense) => {
                return expense.amount
            }).reduce((a,b) => a + b))/100 : 0}$</p>
    )
}



const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseTotal);
