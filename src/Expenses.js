import ExpenseItem from "./ExpenseItems";
import React,  { useState }  from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "./card";
function Expenses(props) {

  const [filteredYear,setFilteredYear]=useState("2019")
  const filterChangeHandler=(enteredYear)=>{
setFilteredYear(enteredYear);

  }
  return (
    <Card>
      <ExpensesFilter selected ={filteredYear}  onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  );
}
export default Expenses;
