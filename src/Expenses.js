import ExpenseItem from "./ExpenseItems";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "./card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
