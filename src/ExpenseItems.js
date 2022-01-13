import "./ExpenseItems.css";
import Card from "./card";
import React from "react";
import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
      const [title, setTitle] = useState(props.title);
      // useState required a default state.
      // it returns a array with exactly two element. 
      // the first element is the current state value and second function is for updating the current State
      const clickHandler = () => {
        setTitle("NEW UPDATED TITLE!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CLICK HERE!!</button>
    </Card>
  );
}

export default ExpenseItem;





// why are we using default keyword- becauuse we want to export a single value from  this fle to another file.
// props are used to import HTML into JSX
