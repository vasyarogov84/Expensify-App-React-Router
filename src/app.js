import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    let state = store.getState();
    let visibleExpenses = getVisibleExpenses(state.expense, state.filter);
    console.log('visibleExpenses', visibleExpenses);
});

store.dispatch(addExpense({ amount: 1000, createdAt: new Date().getTime(), description: 'Water Bill' }));
store.dispatch(addExpense({ amount: 2000, createdAt: new Date().getTime() - 5000, description: 'Gas Bill' }));
store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
