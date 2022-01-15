import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // let expenseContent = <p>No content Found!</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};
export default ExpensesList;
