import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  }

  const startEditingHandler = () => {
    setEditing(true);
  }

  const stopEditing =() =>{
    setEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditing} />}
    </div>
  )
}

export default NewExpense;