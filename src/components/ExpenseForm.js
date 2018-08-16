import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            description: props.expense ?  props.expense.description : '',
            notes: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            id: props.expense ? props.expense.id : '',
            calenderFocused: false,
            error: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.notes
            });
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    }

    getAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: 'red' }}>Please Provide Desc And Amount</p>}
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        value={this.state.description}
                        type="text"
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.getAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add are Note"
                        value={this.state.notes}
                        onChange={this.onNoteChange} >
                    </textarea>
                    <button>Add Expense</button>
                </form>

            </div>
        );
    }
}

export default ExpenseForm;
