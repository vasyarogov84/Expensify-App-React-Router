import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
/// Add Expense
let addExpense = ({ amount = 0, createdAt = 0, description = '', id = 0, note = '' } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        amount,
        createdAt,
        description,
        id,
        note
    }
});
/// Remove Expense
let removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
///  Edit Expense
let editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

/// Change Filter Reduser Text Value

let changeFilterRtextValue = (text = '') => ({
    type: 'EDIT_TEXT',
    text
});

/// Sort By Amount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

/// Sort By Date

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

/// Set Start Date

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

/// Set end Date

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

/// Get Visible Expenses

const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endtDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === 'amount') {
            return a.amount <= b.amount ? 1 : -1;
        }
        });
}

const expenseReduser = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

let filterReducerDefaultState = {
    text: 'RENT',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filterReduser = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'EDIT_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

let store = createStore(combineReducers({
    expense: expenseReduser,
    filter: filterReduser
}));

store.subscribe(() => {
    let state = store.getState();
    console.log('state', state);
    let visibleExpenses = getVisibleExpenses(state.expense,state.filter);
    console.log('visibleExpenses', visibleExpenses);
});
    


let expense1 = store.dispatch(addExpense({ description: 'RENT for March', amount: 100, createdAt: 160, id: uuid() }));
let expense2 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 150, id: uuid() }));

//store.dispatch(removeExpense({ id: expense1.expense.id }));
//store.dispatch(editExpense(expense2.expense.id, { amount: 777}));
store.dispatch(changeFilterRtextValue('RENT'));
//store.dispatch(setStartDate(new Date().getTime() - 50));
store.dispatch(setEndDate(250));
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setEndDate(-200));