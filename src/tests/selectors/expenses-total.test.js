import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should show 0 expenses if no expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});


test('should add up multiple expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});



test('should add up single expense', () => {
    const wrapper = shallow(<ExpenseTotal expenses={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

