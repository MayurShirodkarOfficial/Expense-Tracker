import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';


const dummy = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 290.30,
    date: new Date(2023, 2, 13)
  },
  {
    id: 2,
    title: 'Party Expense',
    amount: 1000,
    date: new Date(2023, 2, 14)
  },
  {
    id: 3,
    title: 'House Expense',
    amount: 1000,
    date: new Date(2023, 2, 14)
  },
  {
    id: 4,
    title: 'Travel Expense',
    amount: 1000,
    date: new Date(2023, 2, 14)
  }
];
const App = () => {

  const [expenses, setExpenses] = useState(dummy);

  //how actuallt things happen
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpensehandler = (expenseData) => {
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
}



export default App;
