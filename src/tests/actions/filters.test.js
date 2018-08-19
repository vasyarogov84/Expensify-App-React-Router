import moment from 'moment';
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from '../../actions/filters';

test('should generate start date action object', () => {
    const startDate = setStartDate(moment(0));
    expect(startDate).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate start date action object', () => {
    const endDate = setEndDate(moment(0));
    expect(endDate).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should generate sort by amount', () => {
    const sortByamount = sortByAmount();
    expect(sortByamount).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
})

test('should generate sort by date', () => {
    const sortBydate = sortByDate();
    expect(sortBydate).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
})

test('should set text filter to the value provided', () => {
    const textValue = setTextFilter('Rent');
    expect(textValue).toEqual({
        type: 'EDIT_TEXT',
        text: 'Rent'
    });
})

test('should set text filter to default value', () => {
    const textValue = setTextFilter();
    expect(textValue).toEqual({
        type: 'EDIT_TEXT',
        text: ''
    });
})