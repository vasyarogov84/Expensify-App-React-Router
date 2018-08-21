import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('lets add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: ''
        }
    };

    const expense = expenseReducer(expenses, action);
    expect(expense).toEqual([
        ...expenses,
        action.expense
    ]);
});


test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by  id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 1
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense with id = expenses[1].id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            id: '4',
            description: 'Rent for August',
            note: '',
            amount: 200000,
            createdAt: moment(0).subtract(4, 'days').valueOf()
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], action.updates, expenses[2]]);
});



test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 5,
        updates: {
            id: '4',
            description: 'Rent for August',
            note: '',
            amount: 200000,
            createdAt: moment(0).subtract(4, 'days').valueOf()
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})