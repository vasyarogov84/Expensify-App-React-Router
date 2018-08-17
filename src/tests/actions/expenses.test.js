import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('should set up remove expense object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});


test('should edit expense object', () => {
    let updates = {
        amount: 50,
        createdAt: 25
    }
    const action = editExpense('123', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount: 50,
            createdAt: 25
        }
    })
});

test('should add expense with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'August',
        createdAt: 1000,
        amount: 120000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should add expense with default expense values', () => {
   
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
            expense: {
                amount: 0,
                createdAt: 0,
                description: '',
                note: '',
                id: expect.any(String)

        }
    });
});