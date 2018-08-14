import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ConnectedExpenseList />
  </div>
);

export default ExpenseDashboardPage;
