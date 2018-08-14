import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

const ExpenseList = (props) => {
    return (
        <div>
            <ul>
                {props.expenses.map((el) => {
                    return <li key={uuid()}>{el.description}</li>
                })}
            </ul>
        </div>
    );
};

export default connect((state) => {
    return {
        expenses: state.expense
    }
})(ExpenseList);

