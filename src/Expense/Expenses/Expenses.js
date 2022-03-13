import React, { useState } from "react";

import Card from "../../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList/ExpensesList";
import "./Expenses.css";
import ExpenseChart from "../Expenses/ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList onDelete={props.onDelete} items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
