import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set text filter', () => {
    const text = 'Rent';
    const action = {
        type: 'EDIT_TEXT',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});




test('should setup start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        date: startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
})