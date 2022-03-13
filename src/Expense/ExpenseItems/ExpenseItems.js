import "./ExpenseItems.css";
import Card from "../../UI/Card";
import React from "react";
// import { useState } from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // useState required a default state.
  // it returns a array with exactly two element.
  // the first element is the current state value and second function is for updating the current State
  const clickHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <li onClick={clickHandler} key={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

// why are we using default keyword- becauuse we want to export a single value from  this fle to another file.
// props are used to import HTML into JSX
