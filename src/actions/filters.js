/// Sort By Amount

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

/// Sort By Date

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

/// Set Start Date

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

/// Set end Date

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

/// Change Filter Reduser Text Value

export let setTextFilter = (text = '') => ({
    type: 'EDIT_TEXT',
    text
});