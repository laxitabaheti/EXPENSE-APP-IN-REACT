import "./NewExpenseform.css";
import React from "react";
import { useState } from "react";

const NewExpenseForm = (props) => {
  // const [UserInput,setUserInput] = useState({
  // enteredTitle:" ",
  // enteredAmount:" ",
  // enteredDate:" ",
  //   });

  //   const clickTitleHandler = (event)=>
  //   { setUserInput((prevstate)=>{
  //     return{
  //       ...prevstate,
  //       enteredTitle:event.target.value,};
  //     });
  //     };

  //   const clickAmountHandler = (event)=>
  //   { setUserInput((prevstate)=>{
  //     return {...prevstate,
  //     enteredAmount:event.target.value,};
  //     });
  //     };

  //     const clickDateHandler = (event)=>
  //   { setUserInput((prevstate)=> {
  //     return{
  //     ...prevstate,
  //     enteredDate:event.target.value,};
  //     });
  //   }
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const clickTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const clickAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const clickDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={clickTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.1"
            step="0.01"
            onChange={clickAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={clickDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
