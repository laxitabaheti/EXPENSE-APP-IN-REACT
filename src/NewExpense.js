import NewExpenseForm from "./NewExpenseForm";
import React from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <button> Add New Expense</button>
      <NewExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
