import { createStore, combineReducers } from 'redux';
import expenseReduser from '../reducers/expenses';
import filterReduser from '../reducers/filters';



export default () => {
    let store = createStore(combineReducers({
        expense: expenseReduser,
        filter: filterReduser
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    return store;
}




