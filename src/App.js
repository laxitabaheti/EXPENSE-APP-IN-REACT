import "./styles.css";
import React, { useState } from "react";
// importing all values
// value - can be class,object,function,array.
import Expenses from "./Expenses";
import NewExpense from "./NewExpense";
// importing a single value

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  const DeletHandler = (expenseId) => {
    // setExpenses((previousExpenses) => {
    //   return previousExpenses.filter((expense) => expense.id !== expenseId);
    // });
    console.log(expenseId);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <Expenses items={expenses} /> */}
      <Expenses items={expenses} onDelete={DeletHandler} />
    </div>
  );
};
export default App;
