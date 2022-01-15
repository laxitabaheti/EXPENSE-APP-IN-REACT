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
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear.toString() === filteredYear;
  });

  let expenseContent=<p>No content Found!</p>

  if(filteredExpenses.length>0){
    expenseContent=(filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)
    ))
  }
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length===0 && <p>No content Found!</p>} */}
       {/* {filteredExpenses.length>0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>} */}
      
        {/* {filteredExpenses.length===0?<p>No content Found!</p>:filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {expenseContent}
      </Card>
    </div>
  );
}
export default Expenses;
