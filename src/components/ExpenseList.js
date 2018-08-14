import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import selectedExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ul>
            {props.expenses.map((expense) => {
                return <li key={uuid()}><ExpenseListItem key={expense.description} {...expense} /></li>
            })}

        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expense, state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);

