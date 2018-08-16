import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
    console.log('props111', props);
    return (
        <div>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                expense={props.expense}
            />

            <button onClick={(expense) => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove Expense</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expense.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);
