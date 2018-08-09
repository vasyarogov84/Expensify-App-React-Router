import { createStore } from 'redux';

let incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

let decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

let resetCount = () => ({
    type: 'RESET'
});

let setCount = ({count = 5000 } = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 17 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }

});




store.subscribe(() => console.log(store.getState()));




let decrement = {
    type: 'DECREMENT',
    incrementBy: 5
}

let reset = {
    type: 'RESET'
}


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 50 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 1000 }));
store.dispatch(setCount());

