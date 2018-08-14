import uuid from 'uuid';

/// Add Expense
export let addExpense = ({ amount = 0, createdAt = 0, description = '', id = 0, note = '' } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        amount,
        createdAt,
        description,
        id:  uuid(),
        note
    }
});
/// Remove Expense
export let removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
///  Edit Expense
export let editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

